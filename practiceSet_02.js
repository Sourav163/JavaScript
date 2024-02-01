// 1. Find whether the age of a person lies between 10 and 20 using logical operators :
let age = 15;
if (age > 10 && age < 20) {
  console.log("The age of the person lies between 10 and 20");
} else {
  console.log("The age of the person doesn't lie between 10 and 20");
}

// 2. Demonstrate the use of switch case statement :
let a = 18;
switch (a) {
  case 0:
    console.log("You are a newbie.");
    break;
  case 18:
    console.log("You are an adult.");
    break;
  case 60:
    console.log("You are old.");
    break;
  default:
    console.log("Data Unavailable...");
}

// 3. Find whether a number is divisible by 2 and 3 :
let num = 6;
if (num % 2 == 0 && num % 3 == 0) {
  console.log("The number is divisible by 2 and 3");
} else {
  console.log("The number is not divisible by 2 and 3");
}

// 4. Find whether a number is divisible by 2 or 3 :
let num0 = 63;
if (num0 % 2 == 0 || num0 % 3 == 0) {
  console.log("The number is divisible by 2 or 3");
} else {
  console.log("The number is not divisible by 2 or 3");
}

// 5. Eligibilty for driving according to age using ternary operator :
let age0 = 18;
console.log("You", age0 < 18 ? "can't drive." : "can drive.");
