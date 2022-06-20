// simple find
// findone
// findbyId
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() => {
        console.log("Connected successfully")
    })
    .catch((e) => {
        console.log("Oh NO Error!!!")
        console.log(e)
    })

const movieSchema = new mongoose.Schema({
    tital: String,
    year: Number,
    score: Number,
    rating: String
})
const Movie = mongoose.model("Movie", movieSchema)

// Run every statement one by one

Movie.find({})
    .then((data) => {
        console.log(data)
    })

// Movie.findOne({ score: { $gte: 8.0 } })
//     .then(data => console.log(data))

// Movie.findById("627ab31c649fcd48597d0888")
//     .then(data => {
//         console.log(data)
//     })