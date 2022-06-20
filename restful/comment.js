const express = require('express');
const path = require("path")
const app = express()
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views/comments"))

app.use(express.urlencoded({ extended: true }))

const { v4: uuid } = require('uuid');

var methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.listen(3000, () => {
    console.log("listening from port 3000")
})

var comments = [
    {
        id: uuid(),
        username: "jeel",
        comment: "hello i am jeel"
    },
    {
        id: uuid(),
        username: "anjali",
        comment: "hello i am anjali"
    },
    {
        id: uuid(),
        username: "ram",
        comment: "hello i am ram"
    },
    {
        id: uuid(),
        username: "shyam",
        comment: "hello i am shyam"
    }
]

// "get" is used to get all data or some specific data from server 

app.get("/comment", (req, res) => {
    res.render("index", { comments })
})

app.get("/comment/new", (req, res) => {
    res.render("new")
})

// "post" is used to post or create or add some data

app.post("/comment", (req, res) => {
    const { username, comment } = req.body
    comments.push({ username, comment, id: uuid() })
    // res.send(`${username} your comment is added`)

    //  If we refresh page in res.send then data duplication of data happened 
    // redirect directly send the request to given link
    res.redirect("/comment")
})

app.get("/comment/:id", (req, res) => {
    const { id } = req.params
    const c = comments.find(c => c.id == id)
    res.render("show", { c })
})



app.get("/comment/:id/edit", (req, res) => {
    const { id } = req.params
    const c = comments.find(c => c.id == id)
    res.render("edit", { c })
})

// "patch" is used to update data "partially"

app.patch("/comment/:id/edit", (req, res) => {
    const { id } = req.params
    const c = comments.find(c => c.id == id)
    const {newComment}=req.body
    c.comment=newComment
    res.redirect("/comment")
    // location.href("http://localhost:3000/comment")

})

/*
app.post("/comment/:id/edit", (req, res) => {
    const { id } = req.params
    console.log("from post")
    const c = comments.find(c => c.id == id)
    const {newComment}=req.body
    c.comment=newComment
    res.redirect("/comment")

})
*/

// "put" is used to update "whole data"

// "delete" to delete the data

app.delete("/comment/:id",(req,res)=>{
    const {id}= req.params
    comments=comments.filter(c=>c.id!=id)
    res.redirect("/comment")
})