function averageOfNumbers(n, numbers) {
    let sum = 0;
  
    for (let i = 0; i < n; i++) {
      sum += numbers[i];
    }
  
    let average = sum / n;
    console.log('Sum:', sum);
    console.log('Average:', average);
  }
  
  // Example Usage
  let numbers = [10, 20, 30, 40];
  averageOfNumbers(4, numbers);
  