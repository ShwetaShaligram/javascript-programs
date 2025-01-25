function findDivisors(num) {
    let divisors = [];
    
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
  
    console.log('Divisors of ' + num + ':', divisors.join(', '));
  }
  
  // Example Usage
  let number = 12;
  findDivisors(number);
  