const express = require("express")
const app = express()
const path = require('path')
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.listen(3000, () => {
    console.log('listening on port 3000')
})

app.get('/random', (req, res) => {
    let num = Math.floor(Math.random() * 10) + 1   // This will give random number from 1-10
    var ans
    if (num % 2 == 0) {
        ans = "even"
    } else {
        ans = "odd"
    }
    res.render("passing data random and condition.ejs", { rand: num, ans })
})

app.get('/r/:subvalue', (req, res) => {
    const { subvalue } = req.params
    res.render("passing data to templets2.ejs", { subvalue })
})

app.get("/cat",(req,res)=>{
    let cat=["hello","hii","meow",'susi']
    res.render("loops.ejs",{cat})
})