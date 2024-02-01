let a = [5, 6, 57, 31, "Hello", 7.3];

console.log(a.push(5));
console.log(a);

console.log(a.length);

console.log(a.pop());
console.log(a);

console.log(a.toString());

console.log(a.join("-"));

console.log(a.shift());
console.log(a);

console.log(a.unshift(10));
console.log(a);

delete a[1];
console.log(a);

let b = [1, 3, 5, 4, 9],
  c = ["World", 5.3, 9.8, 6];
console.log(a.concat(b, c));

console.log(a.sort());

console.log(a.splice(2, 1, 5, "World"));
console.log(a);

console.log(a.slice(2));
console.log(a.slice(1, 3));

console.log(a.reverse());
