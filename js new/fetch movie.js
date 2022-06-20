let btn = document.getElementById("btn")
let text = document.getElementById("search");
let d_image = document.querySelector(".image")
btn.addEventListener("click", async (e) => {
    e.preventDefault();
    d_image.replaceChildren()
    search_text = text.value;
    // const parameter={params:{q:search_text},headers:{}} // we can put headers and add more params saperating by commas
    const parameter = {
        params: {
            q: search_text
        }
    }
    // let res= await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${search_text}`)
    // let res= await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=spiderman`)
    try {
        let res = await axios.get(`https://api.tvmaze.com/singlesearch/shows`, parameter)
        console.log(res.data)
        img = document.createElement("img")
        img.src = res.data.image.medium
        d_image.append(img)
        // makeImages(res.data)
    } catch (e) {
        let message = document.createElement("h1")
        message.innerHTML = "Not found"
        d_image.append(message)
        console.log("Error!!")
    }
    // console.log(res.data.image.medium)

})

// We can do this if we have more than one result

// const makeImages = (shows) => {
//     for (let result of shows) {
//         if (result.show.image) {
//             img = document.createElement("img")
//             img.src = res.data.image.medium
//             d_image.append(img)
//         }
//     }
// }