class ExerciseProgress {
  final DateTime date;
  final String exerciseName;
  final int duration; // в минутах
  final bool completed;

  ExerciseProgress({
    required this.date,
    required this.exerciseName,
    required this.duration,
    required this.completed,
  });

  Map<String, dynamic> toJson() {
    return {
      'date': date.toIso8601String(),
      'exerciseName': exerciseName,
      'duration': duration,
      'completed': completed,
    };
  }

  factory ExerciseProgress.fromJson(Map<String, dynamic> json) {
    return ExerciseProgress(
      date: DateTime.parse(json['date']),
      exerciseName: json['exerciseName'],
      duration: json['duration'],
      completed: json['completed'],
    );
  }
} 