// Write a JavaScript Program of your choice using for loop :
for (let i = 0; i <= 9; i++) console.log("Sourav Routray ", i);

// Calculate the Sum of First n Natural Numbers :
// let n = prompt("Enter The Number :");
let n = 5;
let sum = 0;
for (let i = 0; i <= n; i++) {
  sum += i;
}
console.log("Sum of First ", n, " Natural Numbers is :  ", sum);

// Calculate the Factorial of a Number :
// let n = prompt("Enter The Number :");
let x = 6;
let fact = 1;
for (let i = x; i > 1; i--) {
  fact *= i;
}
console.log("Factorial of ", x, " is :  ", fact);
