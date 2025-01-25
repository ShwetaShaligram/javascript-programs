function shiftLeft(arr) {
    if (arr.length > 1) {
      let firstElement = arr[0];
      for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
      }
      arr[arr.length - 1] = firstElement;
    }
    return arr;
  }
  
  // Example usage
  let array = [1, 2, 3, 4, 5];
  let shiftedArray = shiftLeft(array);
  console.log(shiftedArray); // Output: [2, 3, 4, 5, 1]
  