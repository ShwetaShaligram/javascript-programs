function manualIncludes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  }
  
  // Example usage
  let array = [1, 2, 3, 4, 5];
  let result1 = manualIncludes(array, 3); // Output: true
  let result2 = manualIncludes(array, 6); // Output: false
  
  console.log(result1); // true
  console.log(result2); // false
  