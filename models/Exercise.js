
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Exercisechema = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
});

const Book = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
