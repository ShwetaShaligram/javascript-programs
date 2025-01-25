// sumArray.js
function sumArray(arr) {
    return arr.reduce((acc, currentValue) => acc + currentValue, 0);
}

let array = [1, 2, 3, 4, 5]; // Example input
console.log(`Sum of array elements is ${sumArray(array)}`);