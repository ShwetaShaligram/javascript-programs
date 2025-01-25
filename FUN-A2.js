function checkEvenOdd(n) {
    if (n % 2 === 0) {
        return `${n} is even`;
    } else {
        return `${n} is odd`;
    }
}

let number = 7;
console.log(checkEvenOdd(number));