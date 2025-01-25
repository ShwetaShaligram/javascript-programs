const rows = 5; // Number of rows in the pattern

for (let i = 1; i <= rows; i++) {
  let stars = "";
  
  // Loop to add spaces
  for (let j = 1; j <= rows - i; j++) {
    stars += " ";
  }
  
  // Loop to add stars
  for (let k = 1; k <= i; k++) {
    stars += "*";
  }
  
  console.log(stars);
}
