package com.example.rompompom

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class InstructionAdapter(
    private val instructions: List<String>,
    private val currentStep: Int
) : RecyclerView.Adapter<InstructionAdapter.InstructionViewHolder>() {

    class InstructionViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val instructionText: TextView = view.findViewById(R.id.instructionText)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): InstructionViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_instruction, parent, false)
        return InstructionViewHolder(view)
    }

    override fun onBindViewHolder(holder: InstructionViewHolder, position: Int) {
        val instruction = instructions[position]
        holder.instructionText.text = "${position + 1}. $instruction"
        
        if (position == currentStep) {
            holder.instructionText.setBackgroundResource(R.drawable.current_step_background)
        } else {
            holder.instructionText.setBackgroundResource(0)
        }
    }

    override fun getItemCount() = instructions.size
} 