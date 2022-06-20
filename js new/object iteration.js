var obj = {
    jeel: 90,
    anjali: 90,
    ram: 95,
    hello: 97,
    dobu: 40,
    gandu: 80
};
for(let i in obj){
    console.log(`${i} scored ${obj[i]}`); //for in return only keys
}

console.log(Object.keys(obj));
let mark=Object.values(obj);
let sum=0;
for(let i of mark){
    sum+=i;
}
console.log(`Average marks = ${sum/mark.length}`);