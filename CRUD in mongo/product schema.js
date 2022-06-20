const mongoose = require('mongoose');
const peopleSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        lowercase: true,
        enum: ["male", "female"]
    }
})
const People = mongoose.model("People", peopleSchema);
module.exports = People;