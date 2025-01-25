function findIntersection(arr1, arr2) {
    let intersection = [];
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
        intersection.push(arr1[i]);
      }
    }
  
    return intersection;
  }
  
  // Example usage
  let array1 = [1, 2, 3, 4, 5];
  let array2 = [3, 4, 5, 6, 7];
  let result = findIntersection(array1, array2);
  console.log(result); // Output: [3, 4, 5]
  