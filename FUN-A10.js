// gcd.js
function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

let num1 = 56,
    num2 = 98; // Example input
console.log(`GCD of ${num1} and ${num2} is ${gcd(num1, num2)}`);