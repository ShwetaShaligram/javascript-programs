function findFrequency(arr) {
    let frequencyMap = {};
  
    for (let i = 0; i < arr.length; i++) {
      if (frequencyMap[arr[i]]) {
        frequencyMap[arr[i]]++;
      } else {
        frequencyMap[arr[i]] = 1;
      }
    }
  
    return frequencyMap;
  }
  
  // Example usage
  let array = [1, 2, 2, 3, 3, 3, 4, 5];
  let frequency = findFrequency(array);
  console.log(frequency); // Output: { '1': 1, '2': 2, '3': 3, '4': 1, '5': 1 }
  