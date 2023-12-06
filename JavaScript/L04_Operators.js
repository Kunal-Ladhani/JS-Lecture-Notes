// IMPORTANT: ASSIGNMENT operator
var num = 5;
var name = 'kunal';
var flag = true;
// this is assignment operator.

// IMPORTANT: EQUALITY operator
console.log(2 == '2');  //equal to will only check the value

// IMPORTANT: STRICT EQUALITY operator
console.log(2 === '2');  //it will check equal value AND equal type

// IMPORTANT: INEQUALITY operator
console.log(2 != '2');  // FALSE as value is equal

// IMPORTANT: STRICT INEQUALITY operator
console.log(2 !== '2'); // TRUE as value is equal but type is not

// IMPORTANT: GREATER THAN operator
console.log(2 > '12');  //because 2 is not greater than 12

console.log("2" > '12');  //because 2 is greater than 1


// NOTE : RELATIONAL operators

var k;
console.log(typeof (k));
console.log(Boolean(k));

console.log("-------------------------------------");
// booleans can also be defined as objects with the keyword new
let x = false;
let y = new Boolean(false);
console.log(typeof (x));  // boolean
console.log(typeof (y));  // object
console.log(x == y);  // true
console.log(x === y);  // false

console.log("-------------------------------------");
// Comparing two JavaScript objects always return false.
var a = new Boolean(false);
var b = new Boolean(false);
var c = new Boolean(true);
console.log(a == b);  // all false
console.log(a === b);
console.log(a == c);
console.log(a === c);

console.log("-------------------------------------");
console.log(NaN === NaN);        // false
console.log(Number.NaN === NaN); // false
console.log(isNaN(NaN));         // true
console.log(isNaN(Number.NaN));  // true
console.log(Number.isNaN(NaN));  // true
