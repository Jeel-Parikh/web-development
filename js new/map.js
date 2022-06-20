const a = [1, 2, 3, 4, 5, 6, 7];
var t = a.forEach((i) => { // forEach can not do this thing it can not return item and make array
    return i * 2;
});
console.log(t);

var t = a.map((i) => { // By using map function we can return the array of element 
    return (i * 2);
});
console.log(t);

var obj = [{
        name: "jeel",
        marks: "90"
    },
    {
        name: "anjali",
        marks: "80"
    },
    {
        name: "hello",
        marks: "86"
    },
    {
        name: "world",
        marks: "82"
    },
    {
        name: "chai",
        marks: "26"
    },
    {
        name: "bbla",
        marks: "89"
    },
];

var t = obj.map((i) => {
    return i.name.toUpperCase();
});
console.log(t);