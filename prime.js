const readline = require("readline");

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number to check if it's a prime number: ", (input) => {
  const number = parseInt(input, 10);

  if (isNaN(number) || number < 2) {
    console.log("Please enter a valid integer greater than or equal to 2.");
  } else {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${number} is a prime number.`);
    } else {
      console.log(`${number} is not a prime number.`);
    }
  }

  rl.close();
});
