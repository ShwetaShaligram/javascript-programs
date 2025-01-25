// rectangle.js
function rectangleArea(length, width) {
    return length * width;
}

function rectanglePerimeter(length, width) {
    return 2 * (length + width);
}

let length = 10,
    width = 5; // Example input
console.log(`Area of rectangle: ${rectangleArea(length, width)}`);
console.log(`Perimeter of rectangle: ${rectanglePerimeter(length, width)}`);