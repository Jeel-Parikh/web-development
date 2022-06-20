const color_promise = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = color;
            document.querySelector('body').classList.add("javascript");     // Always prefer this to add class other methods like classname will remove older class
            resolve(`color = ${color}`);
        }, delay)
    })
}

color_promise('violet', 1000)

    // In this case there is no chance of failer so that we did not use .catch

    .then((data) => {
        console.log(data);
        return color_promise("blue", 1000)
    })
    .then((data) => {
        console.log(data);
        return color_promise("green", 1000)
    })
    .then((data) => {
        console.log(data);
        return color_promise("yellow", 1000)
    })
    .then((data) => {
        console.log(data);
        return color_promise("orange", 1000)
    })
    .then((data) => color_promise("red", 1000)) // We can also use short hand of arrow function