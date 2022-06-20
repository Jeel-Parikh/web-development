var obj = [
   {name: "jeel", marks: "90"},
   {name: "anjali", marks: "80"},
   {name: "hello", marks: "86"},
   {name: "world", marks: "82"},
   {name: "chai", marks: "26"},
   {name: "bbla", marks: "89"},
];

obj.forEach(function(item){
    console.log(`${item.name} - ${item.marks}/100`)
});
