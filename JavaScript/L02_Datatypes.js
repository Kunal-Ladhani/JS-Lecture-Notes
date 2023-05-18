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

console.log("________________INTRO___________________")


var x = 12;
var y = x.toString();
console.log(x, typeof (x));
console.log(x, typeof (x));    // string is immutable
console.log(y, typeof (y));

console.log("_________________NUMBER__________________")

z = "21";
console.log(z, typeof (z));    // number is immutable
a = Number(z);
console.log(z, typeof (z));
console.log(a, typeof (a));

/*
 * NOTE: Number
 * Most programming languages have many number types:
 * 
 * Whole numbers (integers):
 * byte (8-bit), short (16-bit), int (32-bit), long (64-bit)
 * 
 * Real numbers (floating-point):
 * float (32-bit), double (64-bit).
 * 
 * Javascript numbers are always one type:
 * double (64-bit floating point).
 * */
var num1 = 2, num2 = -11, num3 = 12.6, num4 = 10e9 + 7, num5 = 10e-6;
console.log("variable num1 = " + num1 + " and its type = " + typeof num1);
console.log("variable num2 = " + num2 + " and its type = " + typeof num2);
console.log("variable num3 = " + num3 + " and its type = " + typeof num3);
console.log("variable num4 = " + num4 + " and its type = " + typeof num4);
console.log("variable num5 = " + num5 + " and its type = " + typeof num5);


console.log("_________________STRING__________________")

LOLstring = "Kunal is a comic fellow!";
console.log(typeof LOLstring);
console.log(LOLstring);

console.log("_________________BOOLEAN__________________")

// boolean data type
var flag = true; // can be used of true/false decision making
console.log("Value of flag is :" + flag);
console.log("Data type of flag is :" + typeof (flag));

m = true;
console.log(m, typeof (m));    // boolean is immutable
n = (!m);
console.log(m, typeof (m));
console.log(n, typeof (n));

// Boolean
var flag = true, neg = !flag;
console.log("variable flag = " + flag + " and its type = " + typeof flag);
console.log("variable neg = " + neg + " and its type = " + typeof neg);


console.log("________________NULL AND UNDEFINED___________________")

var p;
console.log(p, typeof (p));

console.log(p == null);
console.log(p == undefined);

console.log(p === null);
console.log(p === undefined);

console.log("________________NULL AND UNDEFINED___________________")

var q = null;
console.log(q, typeof (q));

String(q);
console.log(q == null);
console.log(q == undefined);

console.log(q === null);
console.log(q === undefined);


console.log("______________UNDEFINED_____________________")

// IMPLICITLY set to undefined -> default
var unassignedRef;
console.log(unassignedRef);
console.log(typeof unassignedRef);

// EXPILICTLY assigned to undefined
var r = undefined;
console.log(r, typeof (r));

console.log(r == null);
console.log(r == undefined);

console.log(r === null);
console.log(r === undefined);


console.log("________________NULL_____________________")

// null
var a = null;
console.log(a, typeof (a));
console.log(typeof null);

// null
var ref = null;
console.log(ref);
console.log(typeof ref);    // OUTPUT- object

console.log("________________OBJECT_____________________")

var myObj = {
    firstname: "Kunal",
    lastname: "Ladhani"
};
console.log(myObj);
console.log(typeof myObj);

console.log("________________ARRAY_____________________")

var arr = [1, 2, 3];
console.log(arr);
console.log(typeof arr);

console.log("________________DATE_____________________")

var today = new Date();
console.log(today);
console.log(typeof today);

console.log("_________________BIGINT__________________")

var largeNum = BigInt("123456789123456789123456789");
console.log(typeof largeNum);
console.log(largeNum);

console.log("_________________SYMBOL__________________")

var foo = Symbol("foo");
console.log(typeof foo);
console.log(foo);