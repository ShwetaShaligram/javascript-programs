const prompt = require('prompt-sync')();
let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));

console.log("Is first number greater than second?", num1 > num2);
console.log("Is first number less than second?", num1 < num2);
console.log("Are the two numbers equal?", num1 === num2);