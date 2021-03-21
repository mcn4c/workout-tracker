const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    // Do we need an id?
    // id: {
    //    type: Number,
    //    unique: true,
    //    required: true,

    // },
 workout: { 
  day: {
      type: Date,
      default: Date.now
    },
  exercises: [
{
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
}
  ]
}
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;