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
