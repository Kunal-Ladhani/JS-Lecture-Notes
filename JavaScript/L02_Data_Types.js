/* NOTE: JS has 8 datatypes -
 * 
 * VALUE TYPES / PRIMITIVE DATA TYPES =>
 * 
 * String
 * Number
 * Bigint
 * Symbol
 * null
 * undefined
 * 
 * NOTE: primitives are copied by value
 * 
 * REFERENCE TYPES / NON-PRIMITIVE DATA TYPES =>
 * 
 * Object
 * Function - object only
 * Array - object only
 * 
 * NOTE : objects are copied by reference
 * 
 * */


/* NOTE : OBJECTS
 * all below 3 are objects = object, array, date
 * */

var x = 12;
var y = x.toString();
console.log(x, typeof (x));
console.log(x, typeof (x));    // string is immutable
console.log(y, typeof (y));

console.log("___________________________________")

z = "21";
console.log(z, typeof (z));    // number is immutable
a = Number(z);
console.log(z, typeof (z));
console.log(a, typeof (a));

console.log("___________________________________")

m = true;
console.log(m, typeof (m));    // boolean is immutable
n = (!m);
console.log(m, typeof (m));
console.log(n, typeof (n));

console.log("___________________________________")

var p;
console.log(p, typeof (p));

console.log(p == null);
console.log(p == undefined);

console.log(p === null);
console.log(p === undefined);


console.log("___________________________________")

var q = null;
console.log(q, typeof (q));

String(q);
console.log(q == null);
console.log(q == undefined);

console.log(q === null);
console.log(q === undefined);


console.log("___________________________________")

var r = undefined;
console.log(r, typeof (r));

console.log(r == null);
console.log(r == undefined);

console.log(r === null);
console.log(r === undefined);

console.log("___________________________________")

// null
var a = null;
console.log(a, typeof (a));
console.log(typeof null);

console.log("___________________________________")

// undefined
var b;
console.log(b, typeof (b));


// NOTE : CALL BY VAL and CALL BY REF

let x1 = 10;
let y = x1; // an actual copy is created.

x1++;
console.log(x1);    // 11
console.log(y);     // 10
// separately stores.

const incrementor = function (num) {
    num++;
    console.log(num);   // see 12 here. as its a local copy.
}

incrementor(x1);
// should inc value of x1 by 1.

// but a local copy of x1 is stored in num, that is increased.
// but its scope dies with function ends.
// so now x1 value is same as before 11.

console.log(x1);    // 11

let n1 = { val: 10 };
let n2 = n1;    // only the reference is copied. a separate object is NOT created.

n1.val++;
console.log(n1);    // 11
console.log(n2);    // 11

// the object is stored once only.
// n1 and n2 both hold the address to rhis memory location.