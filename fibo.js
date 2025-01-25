function generateFibonacci(n) {
    if (n <= 0) {
      return "Please enter a positive integer.";
    }
  
    const fibonacciSequence = [];
    
    let a = 0, b = 1;
  
    for (let i = 1; i <= n; i++) {
      fibonacciSequence.push(a);
      const nextTerm = a + b;
      a = b;
      b = nextTerm;
    }
  
    return fibonacciSequence;
  }
  
  // Test the function
  const n = 10; // Number of terms
  console.log(`Fibonacci sequence up to ${n} terms:`, generateFibonacci(n));
  