console.log("\nOperator Precedence Calculations:");


let result1 = 10 + 3 * 5;
console.log("1. 10 + 3 * 5 =", result1);


let result2 = (10 + 3) * 5;
console.log("2. (10 + 3) * 5 =", result2);


let result3 = 20 / 2 + 3;
console.log("3. 20 / 2 + 3 =", result3);


let result4 = 20 / (2 + 3);
console.log("4. 20 / (2 + 3) =", result4);


console.log("\nExplanation:");
console.log("1. Multiplication (*) has higher precedence than addition (+), so 3 * 5 is calculated first, followed by 10 + 15.");
console.log("2. Parentheses override precedence, so 10 + 3 is calculated first, then multiplied by 5.");
console.log("3. Division (/) has higher precedence than addition (+), so 20 / 2 is calculated first, followed by adding 3.");
console.log("4. Parentheses override precedence, so 2 + 3 is calculated first, then 20 is divided by the result (5).\n");