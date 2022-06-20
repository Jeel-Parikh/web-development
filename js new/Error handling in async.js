const delay_promise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject("Error from promise");
            } else {
                resolve(`your url =  ${url}`);
            }
        }, delay)
    })
};

// By useing try catch we can do error handling

async function f_promise() {
    try {
        let data1 = await delay_promise("/page1")
        console.log(data1)
        let data2 = await delay_promise("/page2")
        console.log(data2)
    } catch (e) {
        console.log("Error!")
        console.log(e)
    }
}
f_promise()
    .then(() => {
        console.log("completed")
    })

    // In this case we are handling error with try catch that's why we don't required .catch 
    // if we are not handling error with that then when error occure at that time .catch will be called but in this case this is not possible

    .catch(() => {
        console.log("last error")
    })