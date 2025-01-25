const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (input) => {
    let number = Math.abs(parseInt(input, 10));
    let sum = 0;

    do {
        sum += number % 10;
        number = Math.floor(number / 10);
    } while (number > 0);

    console.log(`Sum of digits: ${sum}`);
    rl.close();
});