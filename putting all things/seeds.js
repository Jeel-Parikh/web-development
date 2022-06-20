const Product = require("./product/product schema.js")
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/farm')
    .then(() => {
        console.log("Connected successfully")
    })
    .catch((e) => {
        console.log("Oh NO Error!!!")
        console.log(e)
    })

// p1 = new Product(
//     {
//         name: "apple",
//         price: 100,
//         category: "fruit"
//     }
// )
// p1.save()
//     .then(data => console.log(data))
//     .catch((e) => console.log(e))

products = [
    { name: "banana", price: 30, category: "fruit" },
    { name: "poteto", price: 30, category: "vegetable" },
    { name: "milk", price: 50, category: "dairy" },

]

Product.insertMany(products)
    .then(data => {
        console.log(data)
    })
    .catch((e) => {
        console.log(e)
    })