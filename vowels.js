const readline = require("readline");

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a string to count vowels and consonants: ", (input) => {
  const cleanedInput = input.toLowerCase().replace(/[^a-z]/g, ""); // Remove non-alphabetic characters
  const vowels = "aeiou";
  let vowelCount = 0;
  let consonantCount = 0;

  for (const char of cleanedInput) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }

  console.log(`Number of vowels: ${vowelCount}`);
  console.log(`Number of consonants: ${consonantCount}`);

  rl.close();
});
