const fakepromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject("Rejected from promise");
            } else {
                resolve(`your request ${url} resolved`);
            }
        }, delay)
    })
};
fakepromise("hello1")
    // We can make nested .then and .catch else we can do like this refer video 276
    .then((data) => {
        console.log("1 resolved")
        console.log(data)
        return fakepromise("hello2")
    })
    .then((data) => {
        console.log("2 resolved")
        console.log(data)
        return fakepromise("hello3");
    })
    .then((data) => {
        console.log("3 resolved")
        console.log(data)
    })
    .catch((error) => { // Any one of request fail then .catch will be called
        console.log("rejected")
        console.log(error) // data and error will come from promise resolve and reject 
    })