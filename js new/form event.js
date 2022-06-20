const form=document.querySelector(".formclass");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("submit!!")
    addMessage();
});
const addMessage=()=>{
    const under=document.getElementById("ans");
    // we can also use this method for selecting element
    // const usernameInput=document.querySelectorAll('input')[0].value;
    // const messageInput=document.querySelectorAll("input")[1].value;

    // By using name we can select like this
    const usernameInput=form.elements.username;
    const messageInput=form.elements.message;
    // console.log(usernameInput);
    const bold=document.createElement("b");
    const list=document.createElement("li");

    // bold.innerHTML=usernameInput;
    // bold.append(`${usernameInput}`);

    // list.innerHTML=messageInput;
    // list.appendChild(`${bold}  - ${messageInput}`);

    // list.appendChild(bold);
    // list.innerHTML=`${bold.innerHTML}- ${messageInput}`


    // Do not use appendchild use append
    bold.append(usernameInput.value);
    list.append(bold);
    list.append(` - ${messageInput.value}`)
    under.append(list);
    usernameInput.value="";
    messageInput.value="";
}

document.querySelector('#ans').addEventListener("click",(e)=>{
    // console.log(e);
    // e.target.remove(); // This will remove all element including paragraph if we do not want that then 

    e.target.nodeName==='LI' && e.target.remove(); // This will remove only LI not paragraph
})