import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        slivers: [
          SliverAppBar.large(
            title: const Text('Профиль'),
            actions: [
              IconButton(
                icon: const Icon(Icons.settings),
                onPressed: () {
                  // TODO: Открыть настройки
                },
              ),
            ],
          ),
          SliverPadding(
            padding: const EdgeInsets.all(16),
            sliver: SliverList(
              delegate: SliverChildListDelegate([
                const _ProfileHeader(),
                const SizedBox(height: 24),
                _buildSection(
                  context,
                  'Личные данные',
                  [
                    _buildProfileTile(
                      context,
                      'Имя',
                      'Александр',
                      Icons.person,
                    ),
                    _buildProfileTile(
                      context,
                      'Возраст',
                      '25 лет',
                      Icons.cake,
                    ),
                    _buildProfileTile(
                      context,
                      'Пол',
                      'Мужской',
                      Icons.people,
                    ),
                  ],
                ),
                const SizedBox(height: 24),
                _buildSection(
                  context,
                  'Цели',
                  [
                    _buildProfileTile(
                      context,
                      'Основная проблема',
                      'Картавость (звук "Р")',
                      Icons.record_voice_over,
                    ),
                    _buildProfileTile(
                      context,
                      'Дополнительные звуки',
                      'Л, С',
                      Icons.volume_up,
                    ),
                  ],
                ),
                const SizedBox(height: 24),
                _buildSection(
                  context,
                  'Настройки',
                  [
                    _buildProfileTile(
                      context,
                      'Уведомления',
                      'Включены',
                      Icons.notifications,
                      onTap: () {
                        // TODO: Открыть настройки уведомлений
                      },
                    ),
                    _buildProfileTile(
                      context,
                      'Язык',
                      'Русский',
                      Icons.language,
                      onTap: () {
                        // TODO: Открыть настройки языка
                      },
                    ),
                    _buildProfileTile(
                      context,
                      'Тема',
                      'Светлая',
                      Icons.palette,
                      onTap: () {
                        // TODO: Открыть настройки темы
                      },
                    ),
                  ],
                ),
                const SizedBox(height: 24),
                _buildSection(
                  context,
                  'Подписка',
                  [
                    _buildProfileTile(
                      context,
                      'Текущий план',
                      'Бесплатный',
                      Icons.card_membership,
                      onTap: () {
                        // TODO: Открыть информацию о подписке
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

  Widget _buildSection(BuildContext context, String title, List<Widget> children) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: Theme.of(context).textTheme.titleLarge,
        ),
        const SizedBox(height: 16),
        ...children,
      ],
    );
  }

  Widget _buildProfileTile(
    BuildContext context,
    String title,
    String subtitle,
    IconData icon, {
    VoidCallback? onTap,
  }) {
    return Card(
      margin: const EdgeInsets.only(bottom: 8),
      child: ListTile(
        leading: Icon(
          icon,
          color: Theme.of(context).colorScheme.primary,
        ),
        title: Text(title),
        subtitle: Text(subtitle),
        trailing: onTap != null
            ? Icon(
                Icons.arrow_forward_ios,
                size: 16,
                color: Theme.of(context).colorScheme.onSurfaceVariant,
              )
            : null,
        onTap: onTap,
      ),
    );
  }
}

class _ProfileHeader extends StatelessWidget {
  const _ProfileHeader();

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Stack(
          alignment: Alignment.bottomRight,
          children: [
            CircleAvatar(
              radius: 50,
              backgroundColor: Theme.of(context).colorScheme.primaryContainer,
              child: Icon(
                Icons.person,
                size: 50,
                color: Theme.of(context).colorScheme.primary,
              ),
            ),
            Container(
              padding: const EdgeInsets.all(4),
              decoration: BoxDecoration(
                color: Theme.of(context).colorScheme.primary,
                shape: BoxShape.circle,
              ),
              child: Icon(
                Icons.camera_alt,
                size: 20,
                color: Theme.of(context).colorScheme.onPrimary,
              ),
            ),
          ],
        ),
        const SizedBox(height: 16),
        Text(
          'Александр',
          style: Theme.of(context).textTheme.headlineSmall,
        ),
        const SizedBox(height: 4),
        Text(
          'Уровень: Начинающий',
          style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                color: Theme.of(context).colorScheme.onSurfaceVariant,
              ),
        ),
      ],
    );
  }
} 