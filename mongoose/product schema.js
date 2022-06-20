// type
// required
// default
// min
// maxlength
// lowercase
// Add validation error
// Set update validator
// enum


const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/productApp')
    .then(() => {
        console.log("Connected successfully")
    })
    .catch((e) => {
        console.log("Oh NO Error!!!")
        console.log(e)
    })


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        // if you will not enter value then it will throw error
        required: true,
        // Max length of attribute
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        // min value should be '0' second argument for custome error message for that validator
        min: [0, "Price should not be negative"]
    },
    onSale: {
        type: Boolean,
        // If you do not give value by default is will set false
        default: false
    },
    categories: {

        // String type of array
        type: [String]
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        onstore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        // this will check the value of size should be from enum values
        enum: ["s", "m", "l"]
    }
})
const Product = mongoose.model("Product", productSchema)

// let mobile = new Product({ name: "apple", price: 50000, categories: ["ios", "android"], qty: { online: 20 } })
// mobile.save()

// let samsung = new Product({ name: "samsung", price: 20000, categories: ["android"] })
// samsung.save()


// If we use "runValidators" true than it will check all validators  

Product.findOneAndUpdate({ name: "samsung" }, { price: 18000, size: "m" }, { new: true, runValidators: true })
    .then(data => {
        console.log(data)
    })


// Product.find({"qty.online":20})
//     .then(d => {
//         console.log(d)
//     })