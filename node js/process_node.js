// Run line by line
// process.argv are basically give a array with entered parameter at running node file saperated by space

args = process.argv       // This will return first is nodeJs exe file path and second is executable file path after all will given argument while running
console.log(args)

args = args.slice(2)   // It will give all entered argument while running file
for (let arg of args) {
    console.log(`Hello, ${arg}`)
}

process.stdin.on('data', function (input) {  // this will return what we write
    console.log(input.toString())
    if (input.toString().startsWith("exit")) {
        process.exit()
    }
})


var commands = {
    'pwd': function () {
        console.log(process.cwd())
    }
}

process.stdin.on('data', function (input) {  // this will return what we write
    command = input.toString()  // this will give enterd value with extra spaces so we have to split it
    // console.log(command+"from function")
    try {
        commands[command]()
    }
    catch (e) {
        console.log(`${command} is not command`)
    }
})


