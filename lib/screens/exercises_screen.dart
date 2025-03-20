import 'package:flutter/material.dart';
import '../widgets/exercise_card.dart';

class ExercisesScreen extends StatelessWidget {
  const ExercisesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        slivers: [
          SliverAppBar.large(
            title: const Text('Упражнения'),
            actions: [
              IconButton(
                icon: const Icon(Icons.search),
                onPressed: () {
                  // TODO: Открыть поиск
                },
              ),
            ],
          ),
          SliverPadding(
            padding: const EdgeInsets.all(16),
            sliver: SliverList(
              delegate: SliverChildListDelegate([
                _buildCategorySection(
                  context,
                  'Тренировка звука "Р"',
                  [
                    ExerciseCard(
                      title: 'Разминка для языка',
                      description: 'Подготовка артикуляционного аппарата',
                      duration: '5 мин',
                      difficulty: 'Начальный',
                      onTap: () {
                        // TODO: Открыть упражнение
                      },
                    ),
                    ExerciseCard(
                      title: 'Упражнение "Дятел"',
                      description: 'Тренировка вибрации языка',
                      duration: '10 мин',
                      difficulty: 'Средний',
                      onTap: () {
                        // TODO: Открыть упражнение
                      },
                    ),
                    ExerciseCard(
                      title: 'Скороговорки',
                      description: 'Практика произношения',
                      duration: '15 мин',
                      difficulty: 'Продвинутый',
                      onTap: () {
                        // TODO: Открыть упражнение
                      },
                    ),
                  ],
                ),
                const SizedBox(height: 24),
                _buildCategorySection(
                  context,
                  'Тренировка звука "Л"',
                  [
                    ExerciseCard(
                      title: 'Упражнение "Лошадка"',
                      description: 'Тренировка подъема языка',
                      duration: '8 мин',
                      difficulty: 'Начальный',
                      onTap: () {
                        // TODO: Открыть упражнение
                      },
                    ),
                    ExerciseCard(
                      title: 'Упражнение "Парус"',
                      description: 'Тренировка боковых краев языка',
                      duration: '12 мин',
                      difficulty: 'Средний',
                      onTap: () {
                        // TODO: Открыть упражнение
                      },
                    ),
                  ],
                ),
              ]),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildCategorySection(
    BuildContext context,
    String title,
    List<ExerciseCard> exercises,
  ) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: Theme.of(context).textTheme.titleLarge,
        ),
        const SizedBox(height: 16),
        ...exercises,
      ],
    );
  }
} 