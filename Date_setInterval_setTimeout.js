console.log("hello jeel");
date = new Date();
console.log(date);
console.log(Date.now());
custom_date = new Date("01 15 2002 18:20:00"); //MM DD YYYY formate
console.log(custom_date);
// count of any day or date will start from '0'
console.log(`day= ` + custom_date.getDay() +
    ` date= ` + custom_date.getDate() +
    ` month= ` + custom_date.getMonth() +
    ` year= ` + custom_date.getFullYear() +
    ` hours= ` + custom_date.getHours() +
    ` minutes= ` + custom_date.getMinutes());

custom_date.setDate(16);
custom_date.setFullYear(2003);
custom_date.setHours(20);
custom_date.setMinutes(35);
console.log(custom_date);

// Run function after some time interval continuously

// setInterval(() => {
//     document.getElementById("clock").innerHTML =
//     date.getDate() +
//     `-` + (date.getMonth() + 1) +
//     `-` + date.getFullYear() +
//     `  ` + date.getHours() +
//     `:` + date.getMinutes() +
//     `:` + date.getSeconds();
    
// }, 1000);

// Wait for some time to run function only once

// setTimeout(() => {
//     document.getElementById("clock").innerHTML =
//     date.getDate() +
//     `-` + (date.getMonth() + 1) +
//     `-` + date.getFullYear() +
//     `  ` + date.getHours() +
//     `:` + date.getMinutes() +
//     `:` + date.getSeconds();
    
// }, 5000);
setclock=()=>{
    date=new Date();
    document.querySelector("#clock").innerHTML =
        date.getDate() +
        `-` + (date.getMonth() + 1) +
        `-` + date.getFullYear() +
        `  ` + date.getHours() +
        `:` + date.getMinutes() +
        `:` + date.getSeconds();
        
}
setInterval(setclock,1000);