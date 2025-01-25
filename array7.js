function rotateRight(arr, k) {
    let n = arr.length;
    k = k % n; // In case k is larger than the array length
  
    let rotatedArray = [...arr.slice(n - k), ...arr.slice(0, n - k)];
    return rotatedArray;
  }
  
  // Example usage
  let array = [1, 2, 3, 4, 5];
  let k = 2;
  let rotatedArray = rotateRight(array, k);
  console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]
  