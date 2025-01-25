const readline = require("readline");

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number to calculate its factorial: ", (input) => {
  const number = parseInt(input, 10);

  if (isNaN(number) || number < 0) {
    console.log("Please enter a valid non-negative integer.");
  } else {
    let factorial = 1;

    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }

    console.log(`The factorial of ${number} is ${factorial}.`);

    // Display messages based on the value of the factorial
    if (factorial === 1) {
      console.log("The factorial is trivial.");
    } else if (factorial < 100) {
      console.log("The factorial is relatively small.");
    } else if (factorial < 1000) {
      console.log("The factorial is moderate.");
    } else {
      console.log("The factorial is very large!");
    }
  }

  rl.close();
});
