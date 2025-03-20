// Данные упражнений
const exercises = [
    {
        title: "Чистим зубки",
        duration: 120,
        sets: 2,
        restBetweenSets: 45,
        description: "Имитируем чистку зубов языком, тренируя его подвижность",
        instructions: [
            "Откройте рот и улыбнитесь",
            "Кончиком языка проведите по верхним зубам",
            "Двигайтесь от коренных зубов к центру и обратно",
            "Повторите то же самое с нижними зубами",
            "Выполняйте упражнение 2 минуты"
        ],
        imageUrl: "../images/exercises/teeth.jpg",
        tip: "Следите, чтобы язык двигался медленно и касался каждого зуба"
    },
    {
        title: "Грибок",
        duration: 120,
        sets: 2,
        restBetweenSets: 60,
        description: "Прижимаем язык к нёбу, тренируя мышцы языка",
        instructions: [
            "Широко откройте рот",
            "Прижмите язык к нёбу, как присоску",
            "Опустите нижнюю челюсть, не отрывая язык",
            "Удерживайте позицию 5-10 секунд",
            "Повторите 10 раз"
        ],
        imageUrl: "../images/exercises/mushroom.jpg",
        tip: "Если язык отрывается - не страшно, со временем будет получаться лучше"
    },
    {
        title: "Качели",
        duration: 180,
        sets: 2,
        restBetweenSets: 45,
        description: "Поочередно поднимаем и опускаем язык к верхней и нижней губе",
        instructions: [
            "Откройте рот и улыбнитесь",
            "Тянитесь языком к носу, затем к подбородку",
            "Двигайтесь медленно и плавно",
            "Старайтесь максимально вытягивать язык",
            "Повторите 15 раз"
        ],
        imageUrl: "../images/exercises/swing.jpg",
        tip: "Представьте, что ваш язык - это качели, которые плавно двигаются вверх-вниз"
    },
    {
        title: "Барабанщик",
        duration: 120,
        sets: 2,
        restBetweenSets: 30,
        description: "Отрабатываем быстрое произношение звука 'д'",
        instructions: [
            "Улыбнитесь и приоткройте рот",
            "Поставьте язык за верхние зубы",
            "Быстро произносите 'д-д-д'",
            "Постепенно ускоряйтесь",
            "Тренируйтесь 2 минуты"
        ],
        imageUrl: "../images/exercises/drummer.jpg",
        tip: "Важно чувствовать вибрацию языка при произношении"
    },
    {
        title: "Гармошка",
        duration: 180,
        sets: 2,
        description: "Тренируем боковые мышцы языка",
        instructions: [
            "Сделайте 'грибок' (прижмите язык к нёбу)",
            "Не отрывая язык, открывайте и закрывайте рот",
            "Удерживайте положение 3-5 секунд",
            "Повторите 10-15 раз"
        ],
        imageUrl: "../images/exercises/harmonica.jpg",
        tip: "Язык должен оставаться неподвижным, двигается только челюсть"
    },
    {
        title: "Мотор",
        duration: 300,
        sets: 2,
        description: "Тренируем вибрацию языка для звука 'р'",
        instructions: [
            "Поднимите язык к верхним зубам",
            "Произносите 'тр-р-р' или 'др-р-р'",
            "Начните с медленного темпа",
            "Постепенно ускоряйтесь",
            "Тренируйтесь 3-5 минут"
        ],
        imageUrl: "../images/exercises/motor.jpg",
        tip: "Если не получается сразу, начните с быстрого произношения 'д-д-д'"
    }
];

// Данные скороговорок
const tongueTwisters = [
    {
        title: "Простая на Р",
        text: "Рыбки в ручейке резвятся",
        difficulty: "легкая",
        duration: 20,
        tips: [
            "Начните очень медленно",
            "Следите за положением языка при звуке 'Р'",
            "Постепенно увеличивайте темп"
        ]
    },
    {
        title: "Средняя на Р",
        text: "Три дроворуба на трех дворах дрова рубят",
        difficulty: "средняя",
        duration: 25,
        tips: [
            "Разбейте на части: 'три дроворуба' + 'на трех дворах' + 'дрова рубят'",
            "Отработайте каждую часть отдельно",
            "Следите за четким произношением каждого 'Р'"
        ]
    },
    {
        title: "Про Карла и Клару",
        text: "Карл у Клары украл кораллы, а Клара у Карла украла кларнет",
        difficulty: "средняя",
        duration: 30,
        tips: [
            "Разбейте на части",
            "Тренируйте каждую часть отдельно",
            "Соедините части вместе"
        ]
    },
    {
        title: "Про тигра",
        text: "Тигры рычат: 'Р-р-р', тигрята рычат: 'р-р-р'",
        difficulty: "легкая",
        duration: 20,
        tips: [
            "Начните с рычания",
            "Добавьте слова постепенно",
            "Усильте рычание в конце слов"
        ]
    },
    {
        title: "Сложная на Р",
        text: "На горе Арарат рвала Варвара виноград",
        difficulty: "сложная",
        duration: 30,
        tips: [
            "Отрабатывайте каждое слово с 'Р' отдельно",
            "Соединяйте слова попарно",
            "Следите за четкостью каждого звука 'Р'"
        ]
    },
    {
        title: "Про ворону",
        text: "Проворонила ворона вороненка",
        difficulty: "средняя",
        duration: 25,
        tips: [
            "Выделяйте каждый звук 'Р'",
            "Следите за ритмом",
            "Не торопитесь с произношением"
        ]
    }
];

// Элементы интерфейса
const homeButton = document.getElementById('homeButton');
const mainScreen = document.getElementById('mainScreen');
const exercisesScreen = document.getElementById('exercisesScreen');
const tongueTwistersScreen = document.getElementById('tongueTwistersScreen');
const sectionCards = document.querySelectorAll('.section-card');

// Состояние тренировочной сессии
let sessionState = {
    isActive: false,
    currentExerciseIndex: 0,
    currentSet: 1,
    timeLeft: 0,
    isResting: false
};

// Текущее упражнение
let currentExerciseIndex = 0;
let timerInterval = null;

// Добавляем переменную для общего таймера тренировки
let totalWorkoutTimer = null;
let totalWorkoutTime = 0;

// Добавляем переменные для отслеживания состояния тренировки скороговорок
let isWorkoutStarted = false;

// Функция форматирования времени
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Создание карточки упражнения
function createExerciseCard(exercise) {
    const card = document.createElement('div');
    card.className = 'exercise-card';
    card.innerHTML = `
        <h3>${exercise.title}</h3>
        <div class="exercise-content">
            <div class="exercise-info">
                <p class="description">${exercise.description}</p>
                <div class="tip-box">
                    <h4>Подсказка</h4>
                    <p>${exercise.tip}</p>
                </div>
                <ul class="instructions">
                    ${exercise.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    return card;
}

// Создание карточки скороговорки
function createTongueTwisterCard(twister) {
    const card = document.createElement('div');
    card.className = 'tongue-twister-card';
    card.innerHTML = `
        <div class="card-content">
            <h3>${twister.title}</h3>
            <span class="difficulty ${twister.difficulty}">${twister.difficulty}</span>
            <p class="preview-text">${twister.text}</p>
        </div>
    `;
    
    // Добавляем обработчик клика на карточку
    card.addEventListener('click', () => {
        showTongueTwisterDetail(twister);
    });
    
    return card;
}

// Показ детальной информации о скороговорке
function showTongueTwisterDetail(twister) {
    const detailScreen = document.createElement('div');
    detailScreen.className = 'tongue-twister-detail';
    detailScreen.innerHTML = `
        <div class="detail-content">
            <h2>${twister.title}</h2>
            <span class="difficulty ${twister.difficulty}">${twister.difficulty}</span>
            <p class="main-text">${twister.text}</p>
            <div class="timer-container">
                <button class="nav-button prev">←</button>
                <div class="timer-display">${formatTime(twister.duration)}</div>
                <button class="nav-button next">→</button>
                <button class="start-workout-button">Начать тренировку</button>
            </div>
            <div class="tips-container">
                <h4>Советы:</h4>
                <ul>
                    ${twister.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
            <button class="close-detail">×</button>
        </div>
        <div class="total-workout-timer">Общее время: ${formatTime(totalWorkoutTime)}</div>
    `;

    const timerButton = detailScreen.querySelector('.start-workout-button');
    const timerDisplay = detailScreen.querySelector('.timer-display');
    const mainText = detailScreen.querySelector('.main-text');
    let detailTimerInterval = null;
    let timeLeft = twister.duration;
    let isPaused = false;

    // Находим индекс текущей скороговорки
    const currentIndex = tongueTwisters.findIndex(t => t.title === twister.title);

    // Функция для перехода к следующей скороговорке
    function goToNextTwister() {
        if (detailTimerInterval) {
            clearInterval(detailTimerInterval);
        }
        const nextIndex = currentIndex === tongueTwisters.length - 1 ? 0 : currentIndex + 1;
        detailScreen.remove();
        showTongueTwisterDetail(tongueTwisters[nextIndex]);
        
        // Если тренировка уже начата, автоматически запускаем следующую скороговорку
        if (isWorkoutStarted) {
            const nextDetailScreen = document.querySelector('.tongue-twister-detail');
            if (nextDetailScreen) {
                const nextStartButton = nextDetailScreen.querySelector('.start-workout-button');
                if (nextStartButton) {
                    nextStartButton.click();
                }
            }
        }
    }

    // Обработчики для кнопок навигации
    const prevButton = detailScreen.querySelector('.nav-button.prev');
    const nextButton = detailScreen.querySelector('.nav-button.next');

    prevButton.addEventListener('click', () => {
        if (detailTimerInterval) {
            clearInterval(detailTimerInterval);
        }
        const prevIndex = currentIndex === 0 ? tongueTwisters.length - 1 : currentIndex - 1;
        detailScreen.remove();
        showTongueTwisterDetail(tongueTwisters[prevIndex]);
    });

    nextButton.addEventListener('click', goToNextTwister);

    // Обработчик для кнопки "Начать тренировку"
    timerButton.addEventListener('click', () => {
        if (isPaused) {
            // Продолжаем с того же времени
            isPaused = false;
            timerButton.textContent = 'Пауза';
            mainText.classList.add('animate');
            detailTimerInterval = setInterval(() => {
                timeLeft--;
                timerDisplay.textContent = formatTime(timeLeft);
                
                // Усиливаем анимацию когда остается мало времени
                if (timeLeft <= 20) {
                    mainText.classList.remove('animate');
                    mainText.classList.add('animate-intense');
                }
                
                if (timeLeft <= 0) {
                    clearInterval(detailTimerInterval);
                    detailTimerInterval = null;
                    goToNextTwister();
                }
            }, 1000);
        } else if (detailTimerInterval) {
            // Пауза
            isPaused = true;
            clearInterval(detailTimerInterval);
            detailTimerInterval = null;
            timerButton.textContent = 'Продолжить';
            mainText.classList.remove('animate', 'animate-intense');
        } else {
            // Начало
            isPaused = false;
            timeLeft = twister.duration;
            timerButton.textContent = 'Пауза';
            mainText.classList.add('animate');
            
            // Запускаем общий таймер тренировки только при первом старте
            if (!isWorkoutStarted) {
                isWorkoutStarted = true;
                if (!totalWorkoutTimer) {
                    totalWorkoutTimer = setInterval(() => {
                        totalWorkoutTime++;
                        document.querySelectorAll('.total-workout-timer').forEach(timer => {
                            timer.textContent = `Общее время: ${formatTime(totalWorkoutTime)}`;
                        });
                    }, 1000);
                }
            }
            
            detailTimerInterval = setInterval(() => {
                timeLeft--;
                timerDisplay.textContent = formatTime(timeLeft);
                
                // Усиливаем анимацию когда остается мало времени
                if (timeLeft <= 20) {
                    mainText.classList.remove('animate');
                    mainText.classList.add('animate-intense');
                }
                
                if (timeLeft <= 0) {
                    clearInterval(detailTimerInterval);
                    detailTimerInterval = null;
                    goToNextTwister();
                }
            }, 1000);
        }
    });

    // Обновляем обработчик для кнопки закрытия
    detailScreen.querySelector('.close-detail').addEventListener('click', () => {
        if (detailTimerInterval) {
            clearInterval(detailTimerInterval);
        }
        if (totalWorkoutTimer) {
            clearInterval(totalWorkoutTimer);
            totalWorkoutTimer = null;
        }
        totalWorkoutTime = 0;
        isWorkoutStarted = false;
        detailScreen.remove();
    });

    // Обновляем общий таймер на новом экране
    if (totalWorkoutTimer) {
        const totalTimerDisplay = detailScreen.querySelector('.total-workout-timer');
        if (totalTimerDisplay) {
            totalTimerDisplay.textContent = `Общее время: ${formatTime(totalWorkoutTime)}`;
        }
    }

    document.body.appendChild(detailScreen);
}

// Показ экрана
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    // Показываем/скрываем кнопку "На главную"
    homeButton.style.display = screenId === 'mainScreen' ? 'none' : 'block';
}

// Функция создания экрана активной тренировки
function createWorkoutScreen() {
    const workoutScreen = document.createElement('div');
    workoutScreen.id = 'workoutScreen';
    workoutScreen.className = 'screen workout-screen';
    
    workoutScreen.innerHTML = `
        <div class="workout-container">
            <div class="workout-header">
                <h2>Тренировка</h2>
                <div class="workout-progress">
                    <span class="exercise-counter">Упражнение 1/${exercises.length}</span>
                    <span class="set-counter">Подход 1/1</span>
                </div>
            </div>
            <div class="current-exercise">
                <div class="exercise-info">
                    <h3 class="exercise-title"></h3>
                    <p class="exercise-description"></p>
                    <ul class="exercise-instructions"></ul>
                </div>
            </div>
            <div class="workout-controls">
                <div class="timer-display">00:00</div>
                <div class="control-buttons">
                    <button class="skip-exercise">Пропустить упражнение</button>
                    <button class="pause-workout">Пауза</button>
                    <button class="end-workout">Закончить тренировку</button>
                </div>
            </div>
            <button class="close-detail">×</button>
        </div>
    `;

    // Добавляем обработчики для кнопок
    const skipButton = workoutScreen.querySelector('.skip-exercise');
    const pauseButton = workoutScreen.querySelector('.pause-workout');
    const endButton = workoutScreen.querySelector('.end-workout');
    const closeButton = workoutScreen.querySelector('.close-detail');

    skipButton.addEventListener('click', () => {
        if (sessionState.currentExerciseIndex < exercises.length - 1) {
            // Добавляем 5-секундный перерыв перед следующим упражнением
            sessionState.timeLeft = 5;
            sessionState.isResting = true;
            updateWorkoutDisplay();
            
            // После перерыва переходим к следующему упражнению
            setTimeout(() => {
                sessionState.currentExerciseIndex++;
                sessionState.currentSet = 1;
                sessionState.isResting = false;
                sessionState.timeLeft = exercises[sessionState.currentExerciseIndex].duration;
                updateWorkoutDisplay();
            }, 5000);
        } else {
            endWorkoutSession();
        }
    });

    let isPaused = false;
    pauseButton.addEventListener('click', () => {
        isPaused = !isPaused;
        if (isPaused) {
            clearInterval(timerInterval);
            pauseButton.textContent = 'Продолжить';
        } else {
            startExerciseTimer();
            pauseButton.textContent = 'Пауза';
        }
    });

    endButton.addEventListener('click', () => {
        if (confirm('Вы уверены, что хотите закончить тренировку?')) {
            endWorkoutSession();
        }
    });

    // Добавляем обработчик для кнопки закрытия
    closeButton.addEventListener('click', () => {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        sessionState.isActive = false;
        showScreen('exercisesScreen');
        workoutScreen.remove();
    });

    return workoutScreen;
}

// Функция для показа модального окна поздравления
function showCongratulations(message = "Поздравляем! Вы успешно завершили упражнение!") {
    const modal = document.querySelector('.congratulations-modal');
    const messageElement = modal.querySelector('.congratulations-message');
    messageElement.textContent = message;
    modal.classList.add('active');
}

// Функция для скрытия модального окна поздравления
function hideCongratulations() {
    const modal = document.querySelector('.congratulations-modal');
    modal.classList.remove('active');
}

// Обновляем функцию startWorkoutSession
function startWorkoutSession() {
    // Сбрасываем состояние тренировки
    sessionState = {
        isActive: true,
        currentExerciseIndex: 0,
        currentSet: 1,
        timeLeft: exercises[0].duration,
        isResting: false
    };

    const workoutScreen = document.getElementById('workoutScreen');
    const exercisesScreen = document.getElementById('exercisesScreen');
    
    if (!workoutScreen) {
        const newWorkoutScreen = createWorkoutScreen();
        document.body.appendChild(newWorkoutScreen);
    }
    
    exercisesScreen.classList.remove('active');
    document.getElementById('workoutScreen').classList.add('active');
    
    updateWorkoutDisplay();
    startExerciseTimer();
}

// Обновляем функцию startTimer
function startTimer(duration) {
    let timeLeft = duration;
    const timerDisplay = document.querySelector('.timer-display');
    const totalTime = duration;
    
    // Убираем анимацию пульсации
    timerDisplay.style.animation = 'none';
    
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(timeLeft);
        updateTimerColor(timeLeft, totalTime);

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            showCongratulations();
        }
    }, 1000);
}

// Функция обновления отображения тренировки
function updateWorkoutDisplay() {
    const workoutScreen = document.getElementById('workoutScreen');
    const exercise = exercises[sessionState.currentExerciseIndex];
    
    if (!workoutScreen || !exercise) return;
    
    workoutScreen.querySelector('.exercise-counter').textContent = 
        `Упражнение ${sessionState.currentExerciseIndex + 1}/${exercises.length}`;
    workoutScreen.querySelector('.set-counter').textContent = 
        `Подход ${(sessionState.currentSet || 0) + 1}/${exercise.sets}`;
    
    workoutScreen.querySelector('.exercise-title').textContent = exercise.title;
    workoutScreen.querySelector('.exercise-description').textContent = exercise.description;
    
    const instructionsList = workoutScreen.querySelector('.exercise-instructions');
    instructionsList.innerHTML = exercise.instructions
        .map(instruction => `<li>${instruction}</li>`)
        .join('');

    const timerDisplay = workoutScreen.querySelector('.timer-display');
    if (sessionState.isResting) {
        timerDisplay.textContent = `Подготовка: ${formatTime(sessionState.timeLeft)}`;
        timerDisplay.style.color = 'var(--color-orange)';
    } else {
        timerDisplay.textContent = formatTime(sessionState.timeLeft);
        timerDisplay.style.color = 'var(--color-gold)';
    }
}

// Функция управления таймером упражнения
function startExerciseTimer() {
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        sessionState.timeLeft--;
        if (sessionState.timeLeft <= 0) {
            startNextExerciseOrSet();
        }
        updateWorkoutDisplay();
    }, 1000);
}

// Функция перехода к следующему упражнению или подходу
function startNextExerciseOrSet() {
    const exercise = exercises[sessionState.currentExerciseIndex];
    
    if (sessionState.currentSet < exercise.sets) {
        // Переход к следующему подходу
        sessionState.currentSet++;
        sessionState.timeLeft = exercise.duration;
        updateWorkoutDisplay();
    } else {
        // Переход к следующему упражнению
        if (sessionState.currentExerciseIndex < exercises.length - 1) {
            // Добавляем 5-секундный перерыв между упражнениями
            sessionState.timeLeft = 5;
            sessionState.isResting = true;
            updateWorkoutDisplay();
            
            // После перерыва переходим к следующему упражнению
            setTimeout(() => {
                sessionState.currentExerciseIndex++;
                sessionState.currentSet = 1;
                sessionState.isResting = false;
                sessionState.timeLeft = exercises[sessionState.currentExerciseIndex].duration;
                updateWorkoutDisplay();
            }, 5000);
        } else {
            // Завершение тренировки
            endWorkoutSession();
            return;
        }
    }
}

// Функция завершения тренировочной сессии
function endWorkoutSession() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    sessionState.isActive = false;
    
    // Показываем модальное окно с поздравлением
    showCongratulations("Поздравляем! Еще на один день ближе к крррасивой речи!");
    
    // После закрытия модального окна возвращаемся на главный экран
    const continueButton = document.getElementById('continueButton');
    continueButton.onclick = () => {
        hideCongratulations();
        showScreen('mainScreen');
        const workoutScreen = document.getElementById('workoutScreen');
        if (workoutScreen) {
            workoutScreen.remove();
        }
    };
}

// Обновляем инициализацию
function init() {
    // Обработчики для секций
    sectionCards.forEach(card => {
        card.addEventListener('click', () => {
            const section = card.dataset.section;
            if (section === 'exercises') {
                const exercisesList = document.querySelector('.exercises__list');
                exercisesList.innerHTML = '';
                exercises.forEach((exercise, index) => {
                    exercisesList.appendChild(createExerciseCard(exercise));
                });
                showScreen('exercisesScreen');
            } else if (section === 'tongueTwisters') {
                const twistersList = document.querySelector('.tongue-twisters__list');
                twistersList.innerHTML = '';
                tongueTwisters.forEach(twister => {
                    twistersList.appendChild(createTongueTwisterCard(twister));
                });
                showScreen('tongueTwistersScreen');
            }
        });
    });

    // Обработчик для кнопки "Назад" в упражнениях
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', () => {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        showScreen('mainScreen');
    });

    // Обработчик для кнопки "Назад" в скороговорках
    const backFromTwistersButton = document.getElementById('backFromTwistersButton');
    backFromTwistersButton.addEventListener('click', () => {
        showScreen('mainScreen');
    });

    // Обработчик для кнопки "Начать тренировку"
    const startWorkoutButton = document.getElementById('startWorkoutButton');
    startWorkoutButton.addEventListener('click', startWorkoutSession);

    // Добавляем обработчик для кнопки "Продолжить" в модальном окне
    const continueButton = document.getElementById('continueButton');
    continueButton.addEventListener('click', () => {
        hideCongratulations();
        if (sessionState.currentSet < exercises[sessionState.currentExerciseIndex].sets) {
            sessionState.currentSet++;
            startTimer(exercises[sessionState.currentExerciseIndex].duration);
        } else {
            sessionState.currentExerciseIndex++;
            sessionState.currentSet = 1;
            if (sessionState.currentExerciseIndex < exercises.length) {
                updateWorkoutDisplay();
                startTimer(exercises[sessionState.currentExerciseIndex].duration);
            } else {
                showScreen('exercisesScreen');
            }
        }
    });
}

// Запуск приложения
document.addEventListener('DOMContentLoaded', init); 