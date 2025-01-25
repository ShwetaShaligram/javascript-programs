function mergeArraysWithoutDuplicates(arr1, arr2) {
    // Combine the two arrays and use Set to remove duplicates
    let mergedArray = [...arr1, ...arr2];
    let uniqueArray = [...new Set(mergedArray)];
    
    return uniqueArray;
  }
  
  // Example usage
  let array1 = [1, 2, 3, 4];
  let array2 = [3, 4, 5, 6];
  let merged = mergeArraysWithoutDuplicates(array1, array2);
  console.log(merged); // Output: [1, 2, 3, 4, 5, 6]
  