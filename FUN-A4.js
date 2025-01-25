// largestOfThree.js
function largestOfThree(a, b, c) {
    return Math.max(a, b, c);
}

let num1 = 5,
    num2 = 8,
    num3 = 3; // Example input
console.log(`Largest number among ${num1}, ${num2}, and ${num3} is ${largestOfThree(num1, num2, num3)}`);