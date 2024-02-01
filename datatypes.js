// 7 Primitive datatypes :
// NN BB SS U :
let a = null;
let b = 143;
let c = true; // false also.
let d = BigInt("170") + BigInt("104");
let e = "I'm Sourav";
let f = Symbol("helloWorld");
let g; // by default it's type is "undefined".

console.log("a :  ", a);
console.log("b :  ", b);
console.log("c :  ", c);
console.log("d :  ", d);
console.log("e :  ", e);
console.log("f :  ", f);
console.log("g :  ", g);

console.log("\ntypeof(a) :  ", typeof a);
console.log("typeof(b) :  ", typeof b);
console.log("typeof(c) :  ", typeof c);
console.log("typeof(d) :  ", typeof d);
console.log("typeof(e) :  ", typeof e);
console.log("typeof(f) :  ", typeof f);
console.log("typeof(g) :  ", typeof g);

// Non-primitive datatype - Object :
const item = {
  Name: "Sourav",
  Roll: 170,
  Sec: "CSE-3",
  Branch: "CSE",
  Group: 2,
};
console.log("\n item = ", item);
console.log(" Name = ", item["Name"]);
console.log(" Roll = ", item["Roll"]);
console.log(" Section = ", item.Sec);
console.log(" Group = ", item.Group);
console.log(" typeof(item) = ", typeof item);
