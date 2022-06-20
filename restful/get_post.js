const express = require('express');
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.listen(3000, () => {
    console.log("Listening from port 3000")
})
app.get("/hello", (req, res) => {
    // console.log(req.body)    we can not use this in get method bcz data will send through URL in this method
    console.log(req.query)
    const {firstname,lastname}=req.query
    res.send(`Hello ${firstname} ${lastname}! Response from get`)
})
app.post("/hello", (req, res) => {
    console.log(req.body)
    const {firstname,lastname}=req.body
    res.send(`Hello ${firstname} ${lastname}! Response from post`)
})