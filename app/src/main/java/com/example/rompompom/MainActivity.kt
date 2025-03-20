package com.example.rompompom

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class MainActivity : AppCompatActivity() {
    private lateinit var exerciseAdapter: ExerciseAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val exercises = listOf(
            Exercise(
                "Артикуляционная гимнастика",
                "Упражнения для развития артикуляционного аппарата",
                "5 минут",
                "Легкий",
                listOf(
                    "Сделайте глубокий вдох",
                    "Вытяните губы трубочкой",
                    "Удерживайте положение 5 секунд",
                    "Расслабьте губы"
                )
            ),
            Exercise(
                "Дыхательные упражнения",
                "Упражнения для развития дыхания",
                "7 минут",
                "Средний",
                listOf(
                    "Сделайте глубокий вдох через нос",
                    "Задержите дыхание на 3 секунды",
                    "Медленно выдохните через рот",
                    "Повторите 5 раз"
                )
            )
        )

        val recyclerView = findViewById<RecyclerView>(R.id.exercisesRecyclerView)
        exerciseAdapter = ExerciseAdapter(exercises) { exercise ->
            startActivity(ExerciseActivity.newIntent(this, exercise))
        }
        recyclerView.layoutManager = LinearLayoutManager(this)
        recyclerView.adapter = exerciseAdapter
    }
} 