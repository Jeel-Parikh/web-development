var Student = function (name, rollno, age) {  // THis will work as constructor 
    this.name = name;
    this.rollno = rollno;
    this.age = age;
}
Student.prototype.getName = function () {   //Like this way we can add method into class
    // We can also assign value in this way
    // const { name, rollno, age } = this  
    return (this.name)
}
s1 = new Student('jeel', 35, 20)

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name
    }
    innerRGB() {
        const { r, g, b } = this;
        return (`${r},${g},${b}`)
    }
    rgb() {
        return (`rgb(${this.innerRGB()})`)  // we have to use this keyword to use class methods in class
    }
    rgba(a = 1.0) {
        return (`rgba(${this.innerRGB()},${a})`)
    }
}

black = new Color(0, 0, 0, "black")

document.body.style.backgroundColor = black.rgba(.5)
