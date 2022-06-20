// make instanse method that toggle the value of "onsale"
// make instanse method to add category in product
// make static method to find product by categories


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

// This type of method is known as instance method this methods can be apply on instances of "Product Model"
// We have to write all methods before defining the "Product Model"

productSchema.methods.toggleOnsale = function () {
    this.onSale = !this.onSale    // Here this will refer to "p"
    return this.save()
}

productSchema.methods.addCategory = function (c) {
    this.categories.push(c)    // Here this will refer to "p"
    return this.save()
}

//  Here if we use this insted of "Product" ten it is throwing error

productSchema.statics.findBycat = (category) => {
    console.log(this)
    return this.find({ categories: `${category}` })
}

productSchema.statics.fireSale = () => {
    return Product.updateMany({}, { onSale: true, price: 20 })
}

productSchema.virtual("namePrice").get(function () {
    return `${this.name} and ${this.price}`
})

productSchema.pre("save",async () => {
    this.onSale = false;       // This will always call before ".save()" and change value of "onSale" to "false"
    console.log(this)
    console.log("Before save")
}
)

productSchema.post("save",async () => {
    this.onSale = false;
    console.log("After save")
}
)

const Product = mongoose.model("Product", productSchema)

let redmi = new Product({ name: "redmi", price: "1000", categories: ["android"], onSale:true })
redmi.save()
    .then((res)=>{
        console.log(res)
    })

const findProduct = async () => {
    p = await Product.findOne({ name: "apple" })
    console.log(p)
    await p.toggleOnsale()  // "await" is required bcz "save()" required time
    console.log(p)
}

// findProduct()


const findProduct2 = async (c) => {
    p2 = await Product.findOne({ name: "samsung" })
    console.log(p2)
    await p2.addCategory(c)  // "await" is required bcz "save()" required time
    console.log(p2)
}
// findProduct2("java")


// Product.fireSale()
//     .then((res) => {
//         console.log(res)
//     })


// console.log(mi.namePrice)

