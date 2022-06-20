console.log("hello jeel");
// var getData= ()=>{
//     let url="fetch api.js";
//     fetch(url)
//      .then((response) => {
//         return response.text();
//     }).then((data)=>{
//         console.log(data);
//     })
// }


// var getData= ()=>{
//     let url=" https://api.github.com/user";
//     fetch(url).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//     })
// }


var getData = () => {
    let url = " https://api.github.com/users";

    fetch(url)
        .then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
        })
}
// var postData= ()=>{
//     let url=" https://api.github.com/user";
//     let params={

//     }
//     fetch(url,params).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//     })
// }
getData();