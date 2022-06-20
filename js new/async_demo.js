// async will automatically return promise 

const login = async (username, password) => {
    if (!username || !password) {
        throw "Missing parameter" // This will goes in promise reject
    }
    if (password === "hello") return ("Welcome " + username)  // This will goes in promise resolve

    throw "Invalid password"
}

login("jeel", "hello")
    .then((data) => {
        console.log(data)
    })
    .catch((error_msg) => {
        console.log("Error!")
        console.log(error_msg)
    })
