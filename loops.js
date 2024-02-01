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

// Write a JS Program to demonstrate the for-in loop :
let object = {
  Sourav: 170,
  Pikul: 162,
  Sandhan: 146,
  Sasi: 148,
  Uday: 188,
};
for (let key in object)
  console.log("Roll no. of " + key + " is " + object[key]);

// Write a JS Program to demonstrate the for-of loop :
for (let variable of "Sourav") console.log(variable);

// Write a JS Program to demonstrate the while loop :
let a = 1;
while (a <= 100) {
  console.log(a);
  a++;
}

// Write a JS Program to demonstrate the while loop :
let b = 1000;
do {
  console.log(b);
  b++;
} while (b <= 100);
