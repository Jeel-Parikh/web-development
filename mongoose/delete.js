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


// Try this all one by one 


// Movie.remove({ tital: "bye" })
//     .then(data => {
//         console.log(data)
//     })

// Movie.deleteMany({ score: { $lt: 9 } })
//     .then(message => {
//         console.log(message)
//     })

Movie.findOneAndDelete({ tital: "jadu" })
    .then(data => {
        console.log(data)
    })