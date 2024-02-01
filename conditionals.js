// if-else :
let a = prompt("What's Your Age :");
console.log(typeof a);
a = Number.parseInt(a);
console.log(typeof a);

if (a < 0) {
  alert("INVALID AGE !!!");
} else if (a < 18) {
  alert("You Are Not Eligible For Neither Engagement Nor Marriage.");
} else if (a > 18 && a < 21) {
  alert("You Are Eligible For Engagement But Not For Marriage.");
} else {
  alert("You Are Eligible For Both Engagement And Marriage.");
}

// switch :
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

// ternary operator :
console.log("You", a > 18 ? "can drive." : "can't drive.");
