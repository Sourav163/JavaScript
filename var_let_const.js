var a = undefined;
a = 5;
console.log("a = ", a);

let b = undefined;
b = "hello";
console.log("b = ", b);

const c = 10;
console.log("c = ", c);

{
  a = 15;
  console.log("\na = ", a);

  //   b = 20;
  //   console.log("b = ", b);

  let b = 25;
  console.log("b = ", b);
}

console.log("\na = ", a);
console.log("b = ", b);
