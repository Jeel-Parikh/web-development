var http = require("http");
console.log("started...");
http.createServer(function(req, res)
{
    res.write("hello jeel");
    res.end();
}).listen(3000);