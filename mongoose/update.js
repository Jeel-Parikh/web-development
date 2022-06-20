// updateOne
// updatemany
// "findone and update"    use   "new"    We can also use "findbyId and update"

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

// In "updateOne" first parameter is condition to which element to update and second updated value

// Movie.updateOne({ tital: "bye" }, { score: 7 })
//     .then((data) => {
//         console.log(data)
//     })

// Movie.updateMany({ tital: { $in: ["jadu", "hello"] } }, { rating: "good" })
//     .then(data => {
//         console.log(data)
//     })


// This will return before update value

// Movie.findOneAndUpdate({ tital: "bye" }, { score: 7.5 })
//     .then(data => {
//         console.log(data)
//     })


// This will return updated value  

// Movie.findOneAndUpdate({ tital: "bye" }, { score: 8.0 }, { new: true })
//     .then(data => {
//         console.log(data)
//     })


// To update one or more item together
 
Movie.updateOne({ tital: "bye" }, { $set: { score: 8.0, rating: "good" } })
    .then(data => {
        console.log(data)
    })