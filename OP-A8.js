const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Enter weight (kg): ', weight => {
    rl.question('Enter height (m): ', height => {
        const bmi = weight / (height * height);
        let category;

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        console.log(`BMI: ${bmi.toFixed(2)}`);
        console.log(`Category: ${category}`);

        rl.close();
    });
});