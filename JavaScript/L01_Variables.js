// declare and initialize a variable at same time
// called defining a varable
var x = 5;
console.log(x);

// OR, we can -

var a;  // first declare a variable in JS
console.log("variable a = " + a + " and its type = " + typeof a);

a = 10; // then, initialize that variable
console.log("variable a = " + a + " and its type = " + typeof a);

var m, p = 2; // can do multiple definations in one statement
var q = 3, r;
// unlike C++ there is no rule of undeclared at last.
// see, we have put undeclared m first!
console.log(m, p, q, r);