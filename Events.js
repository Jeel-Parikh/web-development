console.log("hello jeel");
document.getElementById("heading1").addEventListener("click", (e)=>{ 
    //there are other eventlistner like mouseenter or mouseleave in that if you enter in block of element than that event will be called
    // in mousemove if you move mouse in container than that event will be called use quaryselector
    console.log("Heading 1 clicked");
    // location.href="google.com";
    let element=e.target;
    console.log(element);
    console.log(element.className);
    Array.from(element.classList).forEach((item)=>{
        console.log(item);
    });
},{once:true});// once is used to to perform operation once
document.getElementById("heading2").addEventListener("mouseover", (e)=>{
    console.log("Heading 2 clicked");
    // location.href="google.com";
    // let element=e.target;
    // console.log(element);
    // console.log(element.className);
    // Array.from(element.classList).forEach((item)=>{
        //     console.log(item);
        // });
    });
document.querySelector(".container").addEventListener("mousemove",(e)=>
{
    console.log(e.offsetX);
    document.querySelector("body").style.backgroundColor=`rgb(${e.offsetX},${e.offeSetY},141)`;
    console.log("mouse move");
});