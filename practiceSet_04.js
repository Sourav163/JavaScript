// 1. What will be the output :
console.log('Har"'.length); // Ans. 4

// 2. Explore includes, startsWith & endsWith functions of a string :
let name0 = "Sourav Routray";

console.log(name0.includes("Rout"));
console.log(name0.includes("rout"));

console.log(name0.startsWith("Sourav"));
console.log(name0.startsWith("Routray"));
console.log(name0.startsWith("Routray", 7));

console.log(name0.endsWith("Routray"));
console.log(name0.endsWith("Sourav"));
console.log(name0.endsWith("Sourav", 6));

// 3. WAP to convert a given string to lowercase :
console.log(name0.toLowerCase());

// 4. Extract the amount out of the string :
let givenString = "Please Give Rs 1000";

// let testCase = "Please Give 100000/-. It's an Urgent!";
// givenString = testCase;

for (var index = 0; index < givenString.length; index++)
  if (!isNaN(Number.parseInt(givenString[index]))) break;

for (var indexRev = givenString.length - 1; indexRev >= 0; indexRev--)
  if (!isNaN(Number.parseInt(givenString[indexRev]))) break;

console.log(Number.parseInt(givenString.slice(index, indexRev + 1)));

// 5. Change 4th character of a string :
let string0 = "Sourav";

string0[3] = "l"; // Will not change bcz string is immutable/unchangable
console.log(string0);

console.log(string0.replace(string0[3], "l")); // An alternative way
