const express = require("express")
const path = require('path')
const app = express()

app.set('view engine', 'ejs')   // Initialising view engine
// By using this we can run our file from any place 
app.set('views', path.join(__dirname, "/views"))     //"__dirname" will give corrent running file path

app.listen(3000, () => {
    console.log("listening on port 3000")
})
app.get('/', (req, res) => {
    // here ".ejs" is not required because we already set view engine
    res.render("hello.ejs")     // By using render we send html file or templets as response by default this will take file from "views" directory.
})