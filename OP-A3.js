const prompt = require('prompt-sync')();
const mathScore = parseFloat(prompt("Enter Math score:"));
const scienceScore = parseFloat(prompt("Enter Science score:"));


const isEligible = mathScore >= 90 && scienceScore >= 85;

console.log("Scholarship Eligibility:", isEligible);