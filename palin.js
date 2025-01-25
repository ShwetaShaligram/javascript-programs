const readline = require("readline");

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a string to check if it's a palindrome: ", (input) => {
  const cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/g, ""); // Remove non-alphanumeric characters and convert to lowercase
  const reversedInput = cleanedInput.split("").reverse().join(""); // Reverse the string

  if (cleanedInput === reversedInput) {
    console.log(`"${input}" is a palindrome.`);
  } else {
    console.log(`"${input}" is not a palindrome.`);
  }

  rl.close();
});
