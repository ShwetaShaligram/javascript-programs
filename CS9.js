const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter three numbers (separated by commas): ', (input) => {
    const numbers = input.split(',').map(num => parseFloat(num.trim()));

    if (numbers.length === 3) {
        const [num1, num2, num3] = numbers;

        let largest = num1;

        if (num2 > largest) {
            largest = num2;
        }
        if (num3 > largest) {
            largest = num3;
        }

        console.log(`The largest number is ${largest}.`);
    } else {
        console.log('Please enter exactly three numbers.');
    }

    rl.close();
});