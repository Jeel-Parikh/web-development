// Importing required libraries
const lineReader = require('line-reader');
const re2=require("re2")
// const regex1 = /((href)|(src))=("|')\w+:?(\/\/)?([^\s]|[^('|")])+/;
// const regex1 = /((href\s?=)|(src\s?=)|(url))\s?\(?("|')[^('|"|\))]+/;
// const regex1 = /((https?:\/\/)|(www))[^("|')]+/;
// const regex1 = /((https?:)|(www))[^("|')]+/;
// const regex1 = new re2(/((https?:)|(www)|(\/\/))[^("|'|\s)]+/)
const regex1 = new re2(`((https?:)|(www)|(\/\/))[^("|'|\s)]+`,"g")
// var s="a src='https://www.pyther.com'"
// console.log(ans)
var cnt=0
lineReader.eachLine('./test.html', (line, last) => {
    if(regex1.test(line)){
        ans=regex1.exec(line)
        // ans[0]=ans[0].replace(/((href\s?=)|(src\s?=)|(url))\s?\(?("|')/g,"")
        // arr.push(ans[0])
        cnt=cnt+1
        console.log(`URL ${cnt}: ${ans[0]}`)
    }
    console.log(last)
});
// console.log(arr.length)