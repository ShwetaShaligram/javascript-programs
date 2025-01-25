// multiplicationTable.js
function multiplicationTable(number) {
    let table = '';
    for (let i = 1; i <= 10; i++) {
        table += `${number} * ${i} = ${number * i}\n`;
    }
    return table;
}

let number = 7; // Example input
console.log(multiplicationTable(number));