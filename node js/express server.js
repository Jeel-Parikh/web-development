// refer express example

const express = require('express')
var app = express()
app.listen(3000, () => {   // This will start server to listen req at port 3000
    console.log("Listening from port 3000")
})

app.get("/", (req, res) => {
    res.send("you requested Nothig so you are in home page")
})

app.get("/dog", (req, res) => {
    res.send("you requested Dog")
})

app.get("/cat", (req, res) => {
    res.send("you requested Cat")
})

// Using this type you can make dynamic URL

app.get("/cat/:subvalue/:attribute", (req, res) => {
    // let subvalue=req.params.subvalue     you can also fatch value like this
    let { subvalue, attribute } = req.params
    res.send(`you requested cat with subvalue = ${subvalue} and attribute = ${attribute}`)
})

// Query in URL

app.get("/search",(req,res)=>{
    let {q}=req.query       // We can add more than one query.
    if(!q){
        res.send("You didn't search anything")
    }
    res.send(`You are searching for ${q}`)
})



app.post("/cat", (req, res) => {
    res.send("you requested Cat from POST request")     // Try this in postman
})

// this will run for all req if all above req is not satisfied 
app.get("*", (req, res) => {
    res.send("Invalid request")
})





// Run this in postman
// app.use was called on every new request
/*

app.use((req,res)=>{       // When any new request come firstly it will pass through this
    console.log("Get new request")
    // res.send("<h1>Hello Jeel</h1>")     // send HTML like this
    // res.send("hello jeel")              // Send simple text like this
    res.send({"hello":"jeel"})          // send JSON like this
})

*/
