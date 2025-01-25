function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    let numDigits = num.toString().length;
  
    while (temp > 0) {
      let digit = temp % 10;
      sum += Math.pow(digit, numDigits);
      temp = Math.floor(temp / 10);
    }
  
    if (sum === num) {
      console.log(num + ' is an Armstrong number.');
    } else {
      console.log(num + ' is not an Armstrong number.');
    }
  }
  
  // Example Usage
  let armstrongNumber = 153;
  isArmstrong(armstrongNumber);
  