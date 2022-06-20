const express = require('express');
const data = require('./data.json')
const path = require("path")
const app = express()
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "public")))


app.listen(3000, () => {
    console.log('listening on port 3000')
})

app.get('/', (req, res) => {
    res.render("home")
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

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    console.log(subreddit)
    d = data[(subreddit.toLowerCase())]
    if (d) {
        res.render("static assets", { ...d })
    }
    else {
        res.render("notFound", { subreddit })
    }
})

app.get("/cat", (req, res) => {
    let cat = ["hello", "hii", "meow", 'susi']
    res.render("loops.ejs", { cat })
})
app.get("*", (req, res) => {
    // console.log(req.params)
    const subreddit = req.params
    // console.log(subreddit[0])

    res.render("notFound",  {subreddit} )
})