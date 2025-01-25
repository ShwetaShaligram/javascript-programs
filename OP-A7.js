const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Enter age: ', age => {
    rl.question('Are you a citizen (true/false)? ', citizenship => {
        console.log((parseInt(age) >= 18 && citizenship.toLowerCase() === 'true') ? 'Eligible to vote: true' : 'Eligible to vote: false');
        rl.close();
    });
});