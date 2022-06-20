// In this method we don't have to parse the promise using json method 
// It will directly return parsed object

// axios.get("https://api.github.com/users")
//     .then(res=>{
//         console.log(res)
//     })
//     .catch(e=>{
//         console.log("Eror!!!!",e)
//     })

// Another method
const fetching = async () => {
    try {
        const res = await axios.get("https://api.github.com/users")
        console.log(res)
    } catch (e) {
        console.log("Error!!!!", e)
    }
}
fetching()