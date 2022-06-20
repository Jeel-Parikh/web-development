var http = require('http');
var reqCount = 0;
var server = http.createServer(function (req, res) {
    console.log(">>new request recieved" + req.url + " count:" + reqCount);
    res.statusCode = 200;
    res.write("Hello world" + reqCount);
    reqCount++;
    res.end();
});
server.listen(3000);