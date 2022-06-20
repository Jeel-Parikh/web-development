// import fetch from "node-fetch";
const axios = require('axios').default;
// let parameter = {
//     params: {
//         base: "USD",
//         apikey: 'GfWeZr0nmwmflyoRCrJVwWoJ5S7gKnac'
//     }

// }
param = {
    base: "USD",
    apikey: 'GfWeZr0nmwmflyoRCrJVwWoJ5S7gKnac'
}
// myHeaders.append("apikey", "GfWeZr0nmwmflyoRCrJVwWoJ5S7gKnac");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    params: param
};

const getData = async () => {

    let res = await axios.get("https://api.apilayer.com/fixer/latest", requestOptions)
    // let data = await res.json();
    console.log(res.data)
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
}
getData()