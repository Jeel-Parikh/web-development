const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const methodOverride = require("method-override");
const AppError = require("./AppError");
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
const People = require("./product schema.js");
const appError = require("./appError.js");
mongoose.connect('mongodb://localhost:27017/people')
    .then(() => {
        console.log("Connected successfully")
    })
    .catch((e) => {
        console.log("Oh NO Error!!!")
        console.log(e)
    })

app.listen(3000, () => {
    console.log("Listening from port 3000")
})

const gender = ["male", "female"]

app.get("/", async (req, res, next) => {
    try {
        peoples = await People.find({});
        res.render("index", { peoples });
    }
    catch (e) {
        next(e);
    }
})

app.get("/add", (req, res) => {
    res.render("addpeople", { gender })
})

app.post("/add", async (req, res, next) => {
    // console.log(firstname)
    try {
        const { firstname, lastname, email, password, gender } = req.body;
        let p = new People({ firstname: firstname, lastname: lastname, email: email, password: password, gender: gender });
        await p.save();
        res.redirect("/");
    }
    catch (e) {
        // res.render("notfound", { e })
        next(e);
    }
})
app.get("/login", (req, res) => {
    res.render("login")
})
app.post("/detail", async (req, res, next) => {
    try {
        const { email, password } = req.body
        // console.log(email)
        let f = await People.findOne({ email: email });
        if (!f) {
            throw new AppError("Invalid Email", 404)
        }
        // console.log(f)
        if (f.password == password) {
            res.render("detail", { f })
        }
        else {
            let e = "Invalid email or password"
            // res.render("notfound", { e })
            throw new AppError(e, 404)     // This will throw error to catch
        }
    }
    catch (e) {
        // res.render("notfound", { e })
        next(e)     // This will send to next middleware with error
    }
})

app.get("/update/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        let p = await People.findById(id)
        res.render("update", { p, gender })
    }
    catch (e) {
        next(e)
    }
})

app.put("/update/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const { firstname, lastname, email, password, gender } = req.body;
        const p = await People.findByIdAndUpdate(id, { $set: { firstname: firstname, lastname: lastname, email: email, password: password, gender: gender } }, { runValidators: true, new: true })
        // console.log(p)
        res.redirect('/')
    }
    catch (e) {
        // res.render("notfound", { e })
        next(e)
    }
})

app.get("/remove/:id", async (req, res) => {
    try {
        const { id } = req.params
        await People.deleteOne({ _id: id })
        res.redirect("/")
    }
    catch (e) {
        next(e)
    }
})

app.use((error, req, res, next) => {
    const { message = "Something went wrong", status = 404 } = error
    res.status(status).send(message)
})