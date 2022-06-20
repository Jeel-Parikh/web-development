let bjoke = document.querySelector("#bjoke")
let l_joke = document.querySelector("#l_joke")

const clicked = async () => {
    let joke = await getjoke()
    console.log(joke)
    let li = document.createElement("li")
    li.append(String(joke))
    l_joke.append(li)

}

bjoke.addEventListener("click", clicked)
const getjoke = async () => {
    const head = {
        headers: {
            Accept: "application/json"  // We can add header like this way
        }
    }
    let res = await axios.get("https://icanhazdadjoke.com/", head)
    return (res.data.joke)
    // console.log(res)
    // console.log(res.data.joke)
}
// getjoke()