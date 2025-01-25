// Assignment 6: Combined 
const prompt = require('prompt-sync')();
console.log("\nRectangle Calculations:");

const length = parseFloat(prompt("Enter length: "));
const width = parseFloat(prompt("Enter width: "));

const perimeter = 2 * (length + width);
const area = length * width;

const isPerimeterGreater = perimeter > area;

console.log("Perimeter:", perimeter);
console.log("Area:", area);
console.log("Is perimeter greater than area?", isPerimeterGreater);