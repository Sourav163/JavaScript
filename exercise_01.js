/* Guess The Number */

// Write a javascript program to generate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess was correct, greater or, lesser than the original number.
// Hint :  100 - (no. of guesses)  is the score of the user. The program is expected to terminate once the number is guessed. Number should be between 1 to 100.

const prompt = require("prompt-sync")();
let r = Math.floor(Math.random() * 100) + 1;
console.log(r);
let score = 100;
for (let round = 1; round <= 100; round++) {
  console.log("\nRound-", round, ":");
  let n = Number(prompt("Enter your guess number :  "));
  if (n === r) break;
  console.log("Your Guess is ", n > r ? "Greater" : "Smaller", ":(");
  score -= 1;
}
console.log("\nCongratulations!!! Your Guess is Correct :)");
console.log("\nYour Score is :  ", score);
