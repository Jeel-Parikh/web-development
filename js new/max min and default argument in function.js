var fun = (name, college = "vgec") => {
    console.log(`${name} is studing in ${college}`);
}
fun("jeel");

a = [4, 1, 3, 5, 7, 9, 2, 4, 3]
b = [6, 6, 4, 3, 2, 2, 4, 4, 5, 66]
c = [35, 34, 4, 43, 3, 4, 34, 4, 6, 6, 6, 6, 33, 3, 3, 3]
console.log(Math.min(1, 3, 10, 5))

console.log(Math.min(a)) // We can not do like this

console.log(Math.max(...a)) // ... will saperate every element of array

console.log(...a) // We can also use this for string

d = [...a] //By using this we can copy the array

// We can also combine the objects by using {} insted of [] in same manner

obj = {
    ..."hello"
}
console.log(obj)

e = [...a, ...b, ...c] // By using this we can combine(merge) the array

function sum(...array) { // By using this we can get any number of argument
    return array.reduce(function (total, el) {
        total += el;
    });
}

(gold, silver, ...other) => {
    console.log(`Gold madel goes to ${gold}`)
    console.log(`silver madel goes to ${silver}`)
    console.log(`Thanks to join ${other}`)
};

const [gold, silver, ...other] = a // This is known as destructuring of array