function countVowelsAndConsonants(str) {
    let vowels = 0, consonants = 0;
    let cleanedStr = str.toLowerCase().replace(/[^a-z]/g, ''); // remove non-alphabet characters
  
    for (let i = 0; i < cleanedStr.length; i++) {
      if ('aeiou'.includes(cleanedStr[i])) {
        vowels++;
      } else {
        consonants++;
      }
    }
  
    console.log('Vowels:', vowels);
    console.log('Consonants:', consonants);
  }
  
  // Example Usage
  let inputString = "Hello World";
  countVowelsAndConsonants(inputString);
  