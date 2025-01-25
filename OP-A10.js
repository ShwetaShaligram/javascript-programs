const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Enter total amount: ', totalAmount => {
    totalAmount = parseFloat(totalAmount);

    if (totalAmount > 100) {
        totalAmount -= totalAmount * 0.10;
    }

    console.log(`Discounted total: ${totalAmount.toFixed(2)}`);

    rl.close();
});