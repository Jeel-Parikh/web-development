window.addEventListener("keyup", (e) => {
    // console.log(e.code);
    randomemaker();
    switch (e.code) {
        case "ArrowUp":
            console.log("UP!");
            break;
        case "ArrowDown":
            console.log("Down!");
            break;
        default:
            console.log(e.code);
    }
});
const randomemaker = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    // return `rgb(${r},${g},${b})`;
    const randcolor=`rgb(${r},${g},${b})`;
    // document.body.style.backgroundColor = rgb(r, g, b);   This is not working because we can not directly give rgb in JS I think!!!!
    document.body.style.backgroundColor = randcolor;
}