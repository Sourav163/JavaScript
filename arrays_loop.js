let arr = ["Hello", "World", 104, 119, 2102170, 2305102];

console.log("Using console :\n", arr);
console.log("\nUsing for-loop :");
for (let index = 0; index < arr.length; index++) console.log(arr[index]);

console.log("\nHello");
console.log(Array.from("Hello"));
console.log(170);
console.log(Array.from(170));

console.log("\nUsing forEach-loop (Modified Array):");
arr.forEach((element) => console.log(element));

console.log("\nUsing for...of-loop :");
for (let i of arr) console.log(i);

console.log("\nUsing for...in-loop :");
for (let ind in arr) console.log(arr[ind]);

console.log("\nUsing map() :");
let arr0 = arr.map((value) => {
  console.log(value);
  return value;
});
console.log("\nUsing map() (Created Array):");
console.log(arr0);

console.log("\nUsing filter() :");
let arr1 = arr.filter((value) => {
  console.log(value);
  return value < 200;
});

console.log("\nUsing filter() (Created Array):");
console.log(arr1);
console.log("\nOriginal Array :  ", arr);

arr = [1, 2, 3, 5, 2, 1];
console.log("\nNew Array :  ", arr);
console.log("\nUsing reduce() (By Adding):");
let arr2 = arr.reduce((i1, i2) => {
  return i1 + i2;
});
console.log(arr2);
