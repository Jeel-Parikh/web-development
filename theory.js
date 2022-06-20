var cardetail = {
    carname: "tata",
    owner: "jeel",
    carinfo: function () {
        console.log("carname " + this.carname + " owner " + this.owner);
    }
};
cardetail.carinfo();
//var trial=cardetail.carinfo(cardetail);
var trial = cardetail.carinfo.bind(cardetail); //bind the detail with cardetail
trial();

var person = {
    name: "jeel"
};


var greeting = function (vanue) {
    console.log("welcome " + this.name + " in " + vanue);
}
console.log(greeting.call(person, "party")); //call is used to bind 

/*  String Example */

email = "jeel1512002@gmail.com";
email.length;
email.startsWith("jee");
email.endsWith("com");
email.match("ee");
email.substring(1, 5);


Date = new Date();


var person = {
    firstname: "jeel",
    lastname: "parikh"
}
var person1 = {
    fullname: function () {
        return this.firstname + " " + this.lastname;
    }
}
person1.fullname.apply(person);


class car {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }
    showdetails() {
        return (this.name + " in parent" + this.brand);
    }
}
class sports_car extends car {
    constructor(name, brand, gare) {
        super(name, brand);
        this.gare = gare;
    }
    showDetails() {
        return (super.showdetails() + " " + this.gare);
    };
}

let a = new sports_car("zero", "hero", "five");
a.showDetails();

//local storage and json

localStorage.setItem("name", "jeel"); //all elements are converted into string
localStorage.getItem("name");

localStorage.setItem("array", [1, 2, 3]); //array is converted into string
localStorage.getItem("array");

localStorage.setItem("array", JSON.stringify([1, 2, 3])); //using JSON.stringify function we can convert array to string in proper format
JSON.parse(localStorage.getItem("array")); //using JSON.parse functionwe can convert string to array