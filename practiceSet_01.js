// 1. Create a variable of type String and try to add a number to it.
let str = "Sourav";
str += 7;
console.log("str =", str);

// 2. Use typeof operator to find the datatype of the string in the last question.
console.log(" tyoeof(str)", typeof str);

// 3. Create a const object in JavaScript. Can you change it to hold a number or later?
const item = {
  Name: "Sourav",
  Roll: 170,
  Sec: "CSE-3",
  Branch: "CSE",
};
console.log("\nitem = ", item);
// item = 5; // TypeError: Assignment to constant variable.

// 4. Try to add a new key to const object in problem-3. Were you able to do it?
item["Friend"] = "Pikul";
item["Name"] = "Romu";
console.log(" item = ", item);

// 5. Write a JS program to create a word-meaning dictionary of 5 words.
const dict = {
  Eloquent:
    "(adjective) Fluent or persuasive in speaking or writing; having the ability to express ideas clearly and effectively.",
  Surreptitious:
    "(adjective) Done in a secretive or stealthy manner, often to avoid detection or attention.",
  Ubiquitous:
    "(adjective) Present, appearing, or found everywhere; being constantly encountered.",
  Conundrum:
    "(noun) A confusing and difficult problem or question, often with no easy solution.",
  Precarious:
    "(adjective) Not securely held or in position; dangerously unstable or uncertain.",
};

console.log("\n A 5 words Dictionary : \n", dict);
