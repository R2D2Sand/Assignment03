// Prompt the user for the first integer
var firstNumber = parseInt(prompt("Enter the first integer: "), 10);

// Prompt the user for the second integer
var secondNumber = parseInt(prompt("Enter the second integer: "), 10);

// Check if the first number is greater than the second number
if (firstNumber > secondNumber) {
  document.write("The larger number is: " + firstNumber);
}
// Check if the second number is greater than the first number
else if (secondNumber > firstNumber) {
  document.write("The larger number is: " + secondNumber);
}
// If the above two conditions fail, it means both numbers are equal
else {
  document.write("Both numbers are equal.");
}