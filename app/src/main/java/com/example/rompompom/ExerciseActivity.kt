package com.example.rompompom

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class ExerciseActivity : AppCompatActivity() {
    private lateinit var exercise: Exercise
    private var currentStep = 0
    private lateinit var instructionAdapter: InstructionAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_exercise)

        exercise = intent.getParcelableExtra(EXTRA_EXERCISE) ?: return finish()

        findViewById<TextView>(R.id.exerciseTitle).text = exercise.title
        findViewById<TextView>(R.id.exerciseDescription).text = exercise.description

        val instructionsRecyclerView = findViewById<RecyclerView>(R.id.instructionsRecyclerView)
        instructionAdapter = InstructionAdapter(exercise.instructions, currentStep)
        instructionsRecyclerView.layoutManager = LinearLayoutManager(this)
        instructionsRecyclerView.adapter = instructionAdapter

        val nextButton = findViewById<Button>(R.id.nextButton)
        nextButton.setOnClickListener {
            if (currentStep < exercise.instructions.size - 1) {
                currentStep++
                instructionAdapter = InstructionAdapter(exercise.instructions, currentStep)
                instructionsRecyclerView.adapter = instructionAdapter
            } else {
                setResult(RESULT_OK)
                finish()
            }
        }
    }

    companion object {
        private const val EXTRA_EXERCISE = "extra_exercise"

        fun newIntent(context: Context, exercise: Exercise): Intent {
            return Intent(context, ExerciseActivity::class.java).apply {
                putExtra(EXTRA_EXERCISE, exercise)
            }
        }
    }
} 