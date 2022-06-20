console.log("hello jeel");
div = function () {

    var num1 = parseInt(document.getElementById("box1").value);
    var num2 = parseInt(document.getElementById("box2").value);
    // document.getElementById("box1").value = "";
    // document.getElementById("box2").value = "";
    document.getElementById("ans").value="";
    try {
        // if (num2 == 0) {
        //     throw new Error("Num2 cannot be zero");
        // }
        var answer = num1 / num2;
        document.getElementById("ans").value =answer;
        console.log("In try block");

    } catch (error) {
        console.log("In catch block ");
        document.getElementById("ans").value = error.message;
        console.log(error);
        console.log(error.name);
        console.log(error.message);
    } finally {
        console.log("In finally block");
    }
}