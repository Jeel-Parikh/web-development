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
// Make collection name "movies"

let jadu=new Movie({tital:"jadu",year:2010,score:9.3,rating:"royal"})
console.log(jadu)

// Run till here and comment all below code in cmd and to load this file use ".load" then run below command and see changes symentiounasly
// Without ".save()" it will not save data to database

jadu.save()

jadu.score=9.5

jadu.save()