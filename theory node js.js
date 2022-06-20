console.log("Hello jeel type something here")
process.stdin.on('data', function(input) {
    console.log("input is = "+input.toString())
});
process.stdin.on('data', function(input) {
    console.log("input 2 is = "+input.toString())
});
process.stdin.on('data', function(input) {
    if(input.toString().startsWith("exit"))
    {
        process.exit();
    }
});