// fetch("https://apicryptonator.com/api/ticker/btc-usd")
//     .then((res) => {
//         console.log("parsing the data",res)
//         return res.json()   // Parse inmput in json
//     })
//     .then((data) => {
//         console.log(data)   // here we got data
//     })
//     .catch(e=>{
//         console.log(`Error!!!!!!!${e}`)
//     })

// Another way of fetch

const fetcher = async () => {
    try {
        const res = await fetch("https://api.github.com/users")
        // console.log(res)
        const data = await res.json()
        console.log(data)
    } catch (e) {
        console.log(`Error!!!${e}`)
    }

}
fetcher()