// Collect a number between 1 and 100 from the user
var score = parseInt(prompt("Enter your score (between 1 and 100): "), 10);

// Make sure the number is between 1 and 100
if (score < 1 || score > 100 || isNaN(score)) {
  console.log("Only numbers between 1 and 100 are accepted.");
} else if (score >= 90) {
  // Score is between 90 and 100
  console.log("You received an A");
} else if (score >= 80) {
  // Score is between 80 and 89
  console.log("You received a B");
} else if (score >= 70) {
  // Score is between 70 and 79
  console.log("You received a C");
} else if (score >= 60) {
  // Score is between 60 and 69
  console.log("You received a D");
} else {
  // Score is less than 60
  console.log("You received an F");
}
