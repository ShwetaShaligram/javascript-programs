const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (input) => {
    const originalString = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedString = originalString.split('').reverse().join('');

    if (originalString === reversedString) {
        console.log(`${input} is a palindrome.`);
    } else {
        console.log(`${input} is not a palindrome.`);
    }

    rl.close();
});