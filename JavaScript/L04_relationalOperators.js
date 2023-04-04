
var k;
console.log(typeof(k));

console.log(Boolean(k));

console.log("-------------------------------------");
// booleans can also be defined as objects with the keyword new
let x = false;
let y = new Boolean(false);
console.log(typeof(x));  // boolean
console.log(typeof(y));  // object
console.log(x==y);  // true
console.log(x===y);  // false

console.log("-------------------------------------");
// Comparing two JavaScript objects always return false.
var a = new Boolean(false);
var b = new Boolean(false);
var c = new Boolean(true);
console.log(a==b);  // all false
console.log(a===b);
console.log(a==c);
console.log(a===c);

console.log("-------------------------------------");
console.log(NaN === NaN);        // false
console.log(Number.NaN === NaN); // false
console.log(isNaN(NaN));         // true
console.log(isNaN(Number.NaN));  // true
console.log(Number.isNaN(NaN));  // true