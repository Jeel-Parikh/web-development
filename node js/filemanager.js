// Refer making dir and file.js

var fs=require("fs");
fs.readFile("test.txt","utf-8",function(err,data)
{
    console.log(data);
});

// fs.writeFile("test.txt","console.log('done')",function (err)

// {
//     console.log("task done successfully");
// });

// fs.appendFile("test.txt","/nappended text",function (err)
// {
//     console.log("task done successfully");
// });

// fs.unlink("test.txt",function(err)
// {
//     console.log("deleted successfully");
// })