import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:shared_preferences.dart';
import '../models/exercise_progress.dart';

class ExerciseProvider with ChangeNotifier {
  List<ExerciseProgress> _progress = [];
  final String _storageKey = 'exercise_progress';

  List<ExerciseProgress> get progress => _progress;

  ExerciseProvider() {
    _loadProgress();
  }

  Future<void> _loadProgress() async {
    final prefs = await SharedPreferences.getInstance();
    final String? data = prefs.getString(_storageKey);
    if (data != null) {
      final List<dynamic> jsonList = json.decode(data);
      _progress = jsonList.map((json) => ExerciseProgress.fromJson(json)).toList();
      notifyListeners();
    }
  }

  Future<void> _saveProgress() async {
    final prefs = await SharedPreferences.getInstance();
    final String data = json.encode(_progress.map((p) => p.toJson()).toList());
    await prefs.setString(_storageKey, data);
  }

  void addProgress(ExerciseProgress progress) {
    _progress.add(progress);
    _saveProgress();
    notifyListeners();
  }

  List<ExerciseProgress> getProgressForDate(DateTime date) {
    return _progress.where((p) => 
      p.date.year == date.year && 
      p.date.month == date.month && 
      p.date.day == date.day
    ).toList();
  }

  int getStreak() {
    if (_progress.isEmpty) return 0;
    
    int streak = 0;
    DateTime currentDate = DateTime.now();
    
    while (true) {
      final hasProgress = _progress.any((p) => 
        p.date.year == currentDate.year && 
        p.date.month == currentDate.month && 
        p.date.day == currentDate.day
      );
      
      if (!hasProgress) break;
      
      streak++;
      currentDate = currentDate.subtract(const Duration(days: 1));
    }
    
    return streak;
  }

  int getTotalMinutes() {
    return _progress.fold(0, (sum, p) => sum + p.duration);
  }
} 