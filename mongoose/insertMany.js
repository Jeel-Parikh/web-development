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

// In this method we do not required to use ".save()" to save in DB

Movie.insertMany([
    { tital: "jeel", year: 2002, score: 10.0, rating: "Great" },
    { tital: "helli", year: 2011, score: 8.5, rating: "good" },
    { tital: "hii", year: 2012, score: 9.7, rating: "moderate" },
    { tital: "bye", year: 2015, score: 8.3, rating: "royal" }
])
    .then((data) => {
        console.log("Inserted successfully!!!")
        console.log(data)
    })
    .catch(e => {
        console.log("Error!!!")
        console.log(e)
    })