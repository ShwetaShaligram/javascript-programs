function reverseArray(arr) {
    let reversedArray = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
    
    return reversedArray;
  }
  
  // Example usage
  let array = [1, 2, 3, 4, 5];
  let reversed = reverseArray(array);
  console.log(reversed); // Output: [5, 4, 3, 2, 1]
  