const readline = require("readline");

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number to generate its multiplication table: ", (input) => {
  const number = parseInt(input, 10);

  if (isNaN(number)) {
    console.log("Please enter a valid number.");
  } else {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
  }

  rl.close();
});
