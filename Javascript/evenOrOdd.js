// Input variables
let num1;
let num2;

// Get first input
num1 = prompt("Enter a whole number between 1 and 10");
num1 - Number(num1);

// Validate input
while (isNaN(num1) || num1 < 1 || num1 > 10) {
  alert("Invalid input");
  num1 = Number(prompt("Enter a whole number between 1 and 10"));
}

// Get second input
num2 = prompt("Enter a whole number between 5 and 15");
num2 = Number(num2);

// Validate input
while (isNaN(num2) || num2 < 5 || num2 > 15) {
  alert("Invalid input");
  num2 = Number(prompt("Enter a whole number between 5 and 15"));
}

// Multiply numbers
let result = num1 * num2;

// Check even or odd
if (result % 2 === 0) {
  console.log("Result is even");
} else {
  console.log("Result is odd");
}
