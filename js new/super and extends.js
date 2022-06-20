class Pet {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getName() {
        return (`Name = ${this.name}`)
    }
}
class Dog extends Pet {
    constructor(name, age, food) {
        super(name, age)
        this.food = food;
    }
    getName() {      // In this way we can override the method
        return (`Name = ${this.name} from child class`)
    }
    eat() {
        return (`${this.name} is eating ${this.food}`)
    }
}

rocky = new Dog("rocky", 5, "chicken")
console.log(rocky.getName())
console.log(rocky.eat())