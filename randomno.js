const readline = require("readline");

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

console.log("Guess the number (between 1 and 10):");

function askQuestion() {
  rl.question("Enter your guess: ", (input) => {
    const userGuess = parseInt(input, 10);

    if (isNaN(userGuess)) {
      console.log("Please enter a valid number.");
    } else if (userGuess === randomNumber) {
      console.log("Congratulations! You guessed the correct number!");
      rl.close();
      return;
    } else if (userGuess > randomNumber) {
      console.log("Too high! Try again.");
    } else if (userGuess < randomNumber) {
      console.log("Too low! Try again.");
    }

    askQuestion(); // Repeat until the user guesses correctly
  });
}

// Start the game
askQuestion();
