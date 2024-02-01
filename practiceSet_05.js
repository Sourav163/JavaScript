const prompt = require("prompt-sync")();

// 1. Create an array of numbers and take input from the user to add numbers to this array :
let arr = [];
let n = prompt("Enter the size of the array :  ");
for (let index = 0; index < n; index++)
  arr[index] = Number.parseInt(
    prompt(`Enter the number element of arr[${index}] :  `)
  );
console.log("\nArray elements are :\n", arr);

// 2. Keep adding numbers to the array in (No. 1) until 0 is addedto the array :
let arr0 = [],
  index = 0;
while (index != -1) {
  arr0[index] = Number.parseInt(
    prompt(`Enter the number element of arr[${index}] :  `)
  );
  index++;
  if (arr0[index - 1] === 0) index = -1;
}
console.log("\nArray elements are :\n", arr0);

// 3. Filter for numbers divisible by 10 from a given array :
let givenArray = [10, 20, 30, 35, 45];
let ansArray = givenArray.filter((value) => {
  if (value % 10 == 0) return value;
});
console.log("Given array elements:\n", givenArray);
console.log("\nArray elements divisible by 10 :\n", ansArray);

// 4. Create an array of square of given numbers :
let ipArray = [],
  opArray = [];
let n1 = prompt("Enter the size of an array :  ");
for (let index = 0; index < n1; index++) {
  ipArray[index] = Number(
    prompt(`Enter the number element of ipArray[${index}] :  `)
  );
}
console.log("\nInput array :  ", ipArray);
opArray = ipArray.map((value) => {
  return value * value;
});
console.log("\nSquared array :  ", opArray);

// 5. Use reduce() to calculate factorial of a given number from an array of first n natural numbers.
// Hint :  n being the number whose factorial needs to be calculated.
let arr1 = [];
let n0 = Number(prompt("Enter the value of n :  "));
for (let index = 0, value = 1; index < n0, value <= n0; index++, value++)
  arr1[index] = value;
console.log("\nThe array is :  ", arr1);
let factorial = arr1.reduce((value1, value2) => {
  return value1 * value2;
});
console.log("\nFactorial of", n0, "by reducing the array is :  ", factorial);
