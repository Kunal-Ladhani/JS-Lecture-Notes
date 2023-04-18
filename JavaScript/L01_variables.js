var x = 5; // declare and initialize a variable at same time
console.log(x);

// OR, we can -

var a;  // first declare a variable in JS
a = 10; // then, initialize that variable
console.log("variable a = " + a + " and its type = " + typeof a);

var m, p = 2; // can do multiple definations in one statement
var q = 3, r;
// unlike C++ there is no rule of undeclared at last.
// see, we have put undeclared m first!
console.log(m, p, q, r);

/** 
 * JS has 8 datatypes -
 * 
 * String
 * Number
 * Bigint
 * Symbol
 * null
 * undefined
 * object
 */


// OBJECTS
// all below 3 are objects = object, array, date
var myObj = {
    firstname: "Kunal",
    lastname: "Ladhani"
};
console.log(myObj);
console.log(typeof myObj);

// array
var arr = [1, 2, 3];
console.log(arr);
console.log(typeof arr);

// date
var today = new Date();
console.log(today);
console.log(typeof today);

// null
var ref = null;
console.log(ref);
console.log(typeof ref);    // OUTPUT- object

// undefined
var unassignedRef;
console.log(unassignedRef);
console.log(typeof unassignedRef);

// String
LOLstring = "Kunal is a comic fellow!";
console.log(typeof LOLstring);
console.log(LOLstring);

/**
 * Number
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
 */
var num1 = 2, num2 = -11, num3 = 12.6, num4 = 10e9 + 7, num5 = 10e-6;
console.log("variable num1 = " + num1 + " and its type = " + typeof num1);
console.log("variable num2 = " + num2 + " and its type = " + typeof num2);
console.log("variable num3 = " + num3 + " and its type = " + typeof num3);
console.log("variable num4 = " + num4 + " and its type = " + typeof num4);
console.log("variable num5 = " + num5 + " and its type = " + typeof num5);

// Boolean
var flag = true, neg = !flag;
console.log("variable flag = " + flag + " and its type = " + typeof flag);
console.log("variable neg = " + neg + " and its type = " + typeof neg);

// Bigint
var largeNum = BigInt("123456789123456789123456789");
console.log(typeof largeNum);
console.log(largeNum);

// symbol
var foo = Symbol("foo");
console.log(typeof foo);
console.log(foo);
