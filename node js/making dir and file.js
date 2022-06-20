// Refer filemanager.js

const fs = require('fs')
args = process.argv

//  This is async type of method
// fs.mkdir(`${args[2]}`, { recursive:true },(err)=>{
//     console.log("In callback")
//     if(err){
//         throw err;
//     }
//     console.log(`${args[2]} is created`)
// })
// console.log("hello Jeel")

try {
    fs.mkdirSync(`${args[2] || "Default"}`, { recursive: true })    // this will make a folder name as per user given name or it will give "default" as name and if folder is already exist then it will not throw error because of "{recursive:true}"
    fs.writeFileSync(`${args[2]}/hello.txt`,"Hello by node")     // this will make "hello.txt" file in given folder name
    // fs.writeFileSync()

} catch (e) {
    console.log("error",e)
}
