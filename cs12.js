function reverseNumber(num) {
    let reversed = 0;
    
    while (num > 0) {
      let digit = num % 10;
      reversed = reversed * 10 + digit;
      num = Math.floor(num / 10);
    }
  
    console.log('Reversed number:', reversed);
  }
  
  // Example Usage
  let inputNumber = 12345;
  reverseNumber(inputNumber);
  