function numberPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
      let row = '';
  
      // Create spaces
      for (let j = 1; j <= rows - i; j++) {
        row += ' ';
      }
  
      // Create numbers
      for (let k = 1; k <= i; k++) {
        row += k;
      }
  
      // Create reversed numbers
      for (let k = i - 1; k >= 1; k--) {
        row += k;
      }
  
      console.log(row);
    }
  }
  
  // Example Usage
  let rows = 5;
  numberPyramid(rows);
  