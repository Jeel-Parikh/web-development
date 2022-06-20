// you have to comment the code

const express = require('express');
const data = require('./data.json')
const path = require("path")
const app = express()
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname,"public")))

app.listen(3000, () => {
    console.log("Listening from port 3000")
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