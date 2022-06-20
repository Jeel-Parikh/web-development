// refer express server

const express=require("express");
const app=express();
app.get("/",function(req,res)
{
    res.write("hello");
    res.end();
});
app.get("/jeel",function(req,res)
{
    res.send("hello jeel");
    res.end();
});
app.get("/jeel/:id",function(req,res)
{
    var id=req.params.id;
    // res.send("hello jeel"+id);
    if(id==1)
    {
        res.send("hii jeel");
    }
    else if(id==2)
    {
        res.send("hii anjali");
    }
    else if(id==3)
    {
        res.send("hii papa");
    }
    else
    {
        res.send("invalid id");
    }
    res.end();
});
app.listen(3000,function(req,res)
{
    console.log("running");
});