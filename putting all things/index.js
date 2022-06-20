const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Product = require("./product/product schema.js")

mongoose.connect('mongodb://localhost:27017/farm')
    .then(() => {
        console.log("Connected successfully")
    })
    .catch((e) => {
        console.log("Oh NO Error!!!")
        console.log(e)
    })


app.set('views', path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))

const methodOverride = require("method-override")
app.use(methodOverride('_method'))

app.listen(3000, () => {
    console.log("listening on port 3000")
})

// Don't make url for "/product" it will throw error because of mongoose dir name product

var categories=["fruit","vegetable","dairy"]

app.get("/products", async (req, res) => {
    products = await Product.find({})
    res.render("index", { products })
    // res.send("Hello jeel")
})

app.get("/product/:id", async (req, res) => {
    const { id } = req.params
    product = await Product.findById(id)
    res.render("product detail", { product })
})

app.get("/products/add", (req, res) => {
    res.render("add product",{categories})
})

app.post("/products/add", async (req, res) => {
    const { name, price, category } = req.body
    p = new Product({ name: name, price: price, category: category })
    await p.save()
    res.redirect("/products")
})

app.get("/products/update/:id", async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render("update product", {product,categories})
})

// Here we use put bcz we are changing all the value

app.put("/products/update/:id", async (req, res) => {
    const { id } = req.params
    const { name, price, category } = req.body
    // console.log(name, "", category)
    const product = await Product.findByIdAndUpdate(id, { $set: { name: name, price: price, category: category } }, { runValidators: true, new: true })
    // console.log(product)
    res.redirect(`/product/${product.id}`)
})