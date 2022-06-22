// Importing required libraries
const re2 = require("re2")
const fs = require('fs');
// const regex1 = new re2(`((https?:)|(www)|(\/\/))[^("|')]+`, "g")
const regex1 = new re2(/((https?:)|(www)|(\/\/))[^("|'|\s)]+/g)
var cnt = 0

fs.readFile('./test.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    while ((ans = regex1.exec(data)) !== null) {
        cnt = cnt + 1
        console.log(`URL ${cnt}: ${ans[0]}`)
    }
});




// lineReader.eachLine('./test.html', (line, last) => {
//     if (regex1.test(line)) {
//         ans = regex1.exec(line)
//         // ans[0]=ans[0].replace(/((href\s?=)|(src\s?=)|(url))\s?\(?("|')/g,"")
//         // arr.push(ans[0])
//         cnt = cnt + 1
//         console.log(`URL ${cnt}: ${ans[0]}`)
//     }
//     console.log(last)
// });
// // console.log(arr.length)