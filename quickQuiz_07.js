// Display a string using for loop :
const prompt = require("prompt-sync")();
let name = prompt("Enter Your Name :  ");
let str = "";

console.log("Displaying Your Name Using for-loop in Coloumn :");
for (let index = 0; index < name.length; index++) {
  str += name[index];
  console.log(name[index]);
}
console.log("Displaying Your Name Using for-loop in a Row :\t", str);
