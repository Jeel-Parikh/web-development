// const color_delay = async function (color, delay) {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;
//         return (`color = ${color}`);
//     }, delay)
// }

// Above thing is not working!!

const color_delay = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = color;
            document.querySelector('body').classList.add("javascript"); // Always prefer this to add class other method like classname will remove older class
            resolve(`color = ${color}`);
        }, delay)
    })
}

// await mean next function will wait untill promise was resolve 
async function rainbow() {
    await color_delay("violet", 1000)
        .then((data) => {
            console.log(data)
        })
    await color_delay("blue", 1000)
        .then((data) => {
            console.log(data)
        })
    await color_delay("green", 1000)
    await color_delay("yellow", 1000)
    await color_delay("orange", 1000)
    await color_delay("red", 1000)
}
rainbow()
    .then((data) => {
        console.log("finish")
    });