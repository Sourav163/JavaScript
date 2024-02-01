let obj = {
  Harry: 98,
  Rohan: 70,
  Aakash: 7,
};

// 1. WAP to print the marks of a student in an object using for loop :
console.log("\nUsing for Loop :");
for (let key = 0; key < Object.keys(obj).length; key++)
  console.log(
    "The Mark of " + Object.keys(obj)[key] + " is " + obj[Object.keys(obj)[key]]
  );

// 2. WAP to print the marks of a student in an object using for loop :
console.log("\nUsing for-in Loop :");
for (let key in obj) console.log("The Mark of " + key + " is " + obj[key]);

// 3. WAP to print "try again" until the user enters the correct number :
// let correctNumber = 11;
// let enteredNumber = prompt("Enter Number :");
// while (enteredNumber != correctNumber) {
//   alert("try again");
//   enteredNumber = prompt("Enter Number :");
// }
// alert("Congrats!!! Number Matched Successfully...");

// 4. Write a Function to find the mean of 5 numbers :
const mean = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};

console.log("\n", mean(1, 2, 3, 4, 5));
