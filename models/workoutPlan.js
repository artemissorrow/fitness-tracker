const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workout = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter an exercise"
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    }
  ]
})

const Workout = mongoose.model("Workout", workout)

module.exports = Workout;

