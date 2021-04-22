const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutPlanSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Enter a name for transaction'
  },
  date: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: Schema.Types.ObjectId,
    ref: "Exercise"
  }]
})

const WorkoutPlan = mongoose.model("Workout", workoutPlanSchema)

module.exports = WorkoutPlan;

