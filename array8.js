function removeDuplicates(arr) {
    let uniqueArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArray.includes(arr[i])) {
        uniqueArray.push(arr[i]);
      }
    }
  
    return uniqueArray;
  }
  
  // Example usage
  let array = [1, 2, 2, 3, 4, 4, 5];
  let arrayWithoutDuplicates = removeDuplicates(array);
  console.log(arrayWithoutDuplicates); // Output: [1, 2, 3, 4, 5]
  