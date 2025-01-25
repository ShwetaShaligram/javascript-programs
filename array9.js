function generateMultiplicationTable() {
    let table = [];
    
    for (let i = 1; i <= 10; i++) {
      let row = [];
      for (let j = 1; j <= 10; j++) {
        row.push(i * j);
      }
      table.push(row);
    }
    
    return table;
  }
  
  // Example usage
  let multiplicationTable = generateMultiplicationTable();
  console.log(multiplicationTable);
  