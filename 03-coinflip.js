// Generate a random number for the coin flip
let coinFlip = Math.round(Math.random());

// Prompt the user to select "Heads" or "Tails"
let choice = prompt("Select 'Heads' or 'Tails'");

// Use conditional logic to check the result of the coin flip
if (coinFlip === 0) { // Assuming 0 is Heads
  if (choice.toLowerCase() === "heads") {
    alert("The flip was heads and you chose heads...you win!");
  } else if (choice.toLowerCase() === "tails") {
    alert("The flip was heads but you chose tails...you lose!");
  }
} else { // Assuming 1 is Tails
  if (choice.toLowerCase() === "tails") {
    alert("The flip was tails and you chose tails...you win!");
  } else if (choice.toLowerCase() === "heads") {
    alert("The flip was tails but you chose heads...you lose!");
  }
}
