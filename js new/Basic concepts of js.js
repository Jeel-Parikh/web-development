class change {
    constructor(o) {
        this.o = o
    }
    do() {
        let { o } = this
        o.name = "jeel"
    }
}
o = { name: "anjali", class: "ce" }
key = Object.keys(o).map(i => i.toUpperCase())
console.log(key)

console.log("Before: ", o.name)
a = new change(o)
a.do()
console.log("After: ", o.name)

n1 = 123
n2 = "123"
// "===" is chaking datatype too while "==" is not chaking datatype 
console.log(n1 == n2)

console.log(typeof (1.29))

z = [1, 2, 3]
z.unshift(4)
console.log(z)

console.log(6 + 3 + "3")

x = [1, 2, 3]
y = [4, 5]
console.log(...x, ...y)

sum = (a, b = 2, c = 3) => {
    return a + b + c
}
console.log(sum(4, ...[1, 5]))
x.unshift(2)
console.log(x)
