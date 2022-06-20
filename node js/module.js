// Refer calc.js FILE

var calc=require("./calc.js"); //   ./ Is idicating that file is in the same folder
var a=5;
var b=10;
var sum=calc.sum2(a,b);
var sub=calc.sub(a,b);
console.log("sum = "+sum);
console.log("sub = "+sub);