package com.example.rompompom

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class ExerciseAdapter(
    private val exercises: List<Exercise>,
    private val onExerciseClick: (Exercise) -> Unit
) : RecyclerView.Adapter<ExerciseAdapter.ExerciseViewHolder>() {

    class ExerciseViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val title: TextView = view.findViewById(R.id.exerciseTitle)
        val description: TextView = view.findViewById(R.id.exerciseDescription)
        val duration: TextView = view.findViewById(R.id.durationText)
        val difficulty: TextView = view.findViewById(R.id.difficultyText)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ExerciseViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_exercise, parent, false)
        return ExerciseViewHolder(view)
    }

    override fun onBindViewHolder(holder: ExerciseViewHolder, position: Int) {
        val exercise = exercises[position]
        holder.title.text = exercise.title
        holder.description.text = exercise.description
        holder.duration.text = "⏱ ${exercise.duration}"
        holder.difficulty.text = "📊 ${exercise.difficulty}"

        holder.itemView.setOnClickListener {
            onExerciseClick(exercise)
        }
    }

    override fun getItemCount() = exercises.size
} 