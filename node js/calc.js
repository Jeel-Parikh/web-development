// Refer modual.js FILE

// here we have represented 3 different way of exports function

// if we do not write exports then that is not accessable by other file

function sum(a,b)
{
    return (a+b);
}
exports.sub = sub=(a,b)=>
{
    return (a-b);
}
function mul(a,b)
{
    return (a*b);
}
function div(a,b)
{
    return (a/b);
}
module.exports.sum2=sum;    // We can set name as we like from here 
exports.mul=mul;
exports.div=div;