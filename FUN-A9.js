// isPalindrome.js
function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr ? `${str} is a palindrome` : `${str} is not a palindrome`;
}

let word = "madam"; // Example input
console.log(isPalindrome(word));