function myFunc() {
  console.log("Hello World");
  return "\t-Sourav";
}
console.log(myFunc());

function onePlusAvg(x, y) {
  return 1 + (x + y) / 2;
}
let a = 10,
  b = 20,
  c = 25;
console.log("One Plus Average of a and b is :  ", onePlusAvg(a, b));
console.log("One Plus Average of b and c is :  ", onePlusAvg(b, c));
console.log("One Plus Average of a and c is :  ", onePlusAvg(a, c));

const sum = (a, b) => {
  return a + b;
};
console.log(sum(25, 4));
