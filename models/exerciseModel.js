const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
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
    sets: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
  const Exercise = mongoose.model("Exercise", exerciseSchema);
  
  module.exports = Exercise;