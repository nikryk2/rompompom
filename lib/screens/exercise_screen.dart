import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/exercise_provider.dart';
import '../models/exercise_progress.dart';

class ExerciseScreen extends StatefulWidget {
  final String title;
  final String description;
  final List<String> instructions;
  final int duration;

  const ExerciseScreen({
    super.key,
    required this.title,
    required this.description,
    required this.instructions,
    required this.duration,
  });

  @override
  State<ExerciseScreen> createState() => _ExerciseScreenState();
}

class _ExerciseScreenState extends State<ExerciseScreen> {
  bool _isCompleted = false;
  int _currentStep = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView(
              padding: const EdgeInsets.all(16),
              children: [
                Text(
                  widget.description,
                  style: Theme.of(context).textTheme.bodyLarge,
                ),
                const SizedBox(height: 24),
                Text(
                  'Инструкции:',
                  style: Theme.of(context).textTheme.titleLarge,
                ),
                const SizedBox(height: 16),
                ...widget.instructions.asMap().entries.map((entry) {
                  final index = entry.key;
                  final instruction = entry.value;
                  return Padding(
                    padding: const EdgeInsets.only(bottom: 16),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Container(
                          width: 24,
                          height: 24,
                          margin: const EdgeInsets.only(right: 8),
                          decoration: BoxDecoration(
                            color: index == _currentStep
                                ? Theme.of(context).colorScheme.primary
                                : Theme.of(context).colorScheme.surfaceVariant,
                            shape: BoxShape.circle,
                          ),
                          child: Center(
                            child: Text(
                              '${index + 1}',
                              style: TextStyle(
                                color: index == _currentStep
                                    ? Theme.of(context).colorScheme.onPrimary
                                    : Theme.of(context).colorScheme.onSurfaceVariant,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                        ),
                        Expanded(
                          child: Text(
                            instruction,
                            style: Theme.of(context).textTheme.bodyLarge,
                          ),
                        ),
                      ],
                    ),
                  );
                }).toList(),
              ],
            ),
          ),
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: Theme.of(context).colorScheme.surface,
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.1),
                  blurRadius: 10,
                  offset: const Offset(0, -5),
                ),
              ],
            ),
            child: Row(
              children: [
                Expanded(
                  child: Text(
                    'Шаг ${_currentStep + 1} из ${widget.instructions.length}',
                    style: Theme.of(context).textTheme.bodyLarge,
                  ),
                ),
                if (_currentStep < widget.instructions.length - 1)
                  FilledButton(
                    onPressed: () {
                      setState(() {
                        _currentStep++;
                      });
                    },
                    child: const Text('Следующий шаг'),
                  )
                else
                  FilledButton(
                    onPressed: _isCompleted
                        ? null
                        : () {
                            final provider = context.read<ExerciseProvider>();
                            provider.addProgress(
                              ExerciseProgress(
                                date: DateTime.now(),
                                exerciseName: widget.title,
                                duration: widget.duration,
                                completed: true,
                              ),
                            );
                            setState(() {
                              _isCompleted = true;
                            });
                          },
                    child: Text(_isCompleted ? 'Выполнено' : 'Завершить'),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }
} 