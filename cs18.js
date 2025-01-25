function fibonacciSequence(n) {
    let fib = [0, 1];
  
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  
    console.log('Fibonacci sequence:', fib.join(', '));
  }
  
  // Example Usage
  let terms = 10;
  fibonacciSequence(terms);
  