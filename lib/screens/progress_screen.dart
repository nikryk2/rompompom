import 'package:flutter/material.dart';
import '../widgets/progress_chart.dart';
import '../widgets/achievement_card.dart';

class ProgressScreen extends StatelessWidget {
  const ProgressScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        slivers: [
          SliverAppBar.large(
            title: const Text('Прогресс'),
            actions: [
              IconButton(
                icon: const Icon(Icons.share),
                onPressed: () {
                  // TODO: Поделиться прогрессом
                },
              ),
            ],
          ),
          SliverPadding(
            padding: const EdgeInsets.all(16),
            sliver: SliverList(
              delegate: SliverChildListDelegate([
                const ProgressChart(),
                const SizedBox(height: 24),
                Text(
                  'Достижения',
                  style: Theme.of(context).textTheme.titleLarge,
                ),
                const SizedBox(height: 16),
                const AchievementCard(
                  title: 'Первые шаги',
                  description: 'Выполните первое упражнение',
                  icon: Icons.star,
                  isUnlocked: true,
                ),
                const AchievementCard(
                  title: 'Неделя тренировок',
                  description: 'Занимайтесь 7 дней подряд',
                  icon: Icons.calendar_today,
                  isUnlocked: false,
                ),
                const AchievementCard(
                  title: 'Мастер звука "Р"',
                  description: 'Выполните все упражнения для звука "Р"',
                  icon: Icons.emoji_events,
                  isUnlocked: false,
                ),
              ]),
            ),
          ),
        ],
      ),
    );
  }
} 