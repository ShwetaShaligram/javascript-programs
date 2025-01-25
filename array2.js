function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
      }
    }
  
    return secondLargest === -Infinity ? "No second largest number" : secondLargest;
  }
  
  // Example usage
  let array = [10, 20, 4, 45, 99];
  let secondLargest = findSecondLargest(array);
  console.log(secondLargest); // Output: 45
  