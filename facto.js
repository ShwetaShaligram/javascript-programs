function factorialUsingWhile(num) {
    if (num < 0) {
      return "Factorial is not defined for negative numbers.";
    }
  
    let factorial = 1;
    let i = 1;
  
    while (i <= num) {
      factorial *= i; // Multiply the current value of factorial by i
      i++; // Increment i
    }
  
    return factorial;
  }
  
  // Test the function
  const number = 5; // You can change this value to test with other numbers
  console.log(`The factorial of ${number} is: ${factorialUsingWhile(number)}`);
  