package com.example.rompompom

import android.os.Parcelable
import kotlinx.parcelize.Parcelize

@Parcelize
data class Exercise(
    val title: String,
    val description: String,
    val duration: String,
    val difficulty: String,
    val instructions: List<String>
) : Parcelable 