import 'package:flutter/material.dart';
import '../widgets/daily_exercise_card.dart';
import '../widgets/progress_summary.dart';
import '../widgets/streak_counter.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        slivers: [
          SliverAppBar.large(
            title: const Text('РомПомПом'),
            actions: [
              IconButton(
                icon: const Icon(Icons.notifications_outlined),
                onPressed: () {
                  // TODO: Открыть уведомления
                },
              ),
            ],
          ),
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const StreakCounter(),
                  const SizedBox(height: 24),
                  Text(
                    'Привет, Александр!',
                    style: Theme.of(context).textTheme.headlineMedium,
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'Давай продолжим тренировку звука "Р"',
                    style: Theme.of(context).textTheme.bodyLarge,
                  ),
                  const SizedBox(height: 24),
                  const DailyExerciseCard(),
                  const SizedBox(height: 24),
                  const ProgressSummary(),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
} 