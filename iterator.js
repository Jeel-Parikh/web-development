console.log("hello jeel");
var arr = [1, 2, 3, 4, 5];
var iteratorArr = (values) => {
    let nextArr = 0;
    return {
        next: () => {
            if (nextArr < arr.length) {
                return {
                    value: values[nextArr++],
                    done: false
                }

            } else {
                return {
                    done: true
                }
            }
        }
    }
}
// console.log(iteratorArr(arr));
// console.log(iteratorArr(arr).next());
const fruitarr = iteratorArr(arr);
console.log(fruitarr.next());
console.log(fruitarr.next().value);
console.log(fruitarr.next().value);
console.log(fruitarr.next().value);
console.log(fruitarr.next().value);
console.log(fruitarr.next());