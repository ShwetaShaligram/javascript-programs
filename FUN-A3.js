// reverseString.js
function reverseString(str) {
    return str.split('').reverse().join('');
}

let inputString = "hello"; // Example input
console.log(`Reversed string of "${inputString}" is "${reverseString(inputString)}"`);