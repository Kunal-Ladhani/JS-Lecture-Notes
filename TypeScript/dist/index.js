"use strict";
var _a;
let age = 20;
if (age < 18) {
    console.log("Cannot vote.");
}
else {
    console.log("You can vote.");
}
//=================================================================
/*
    JS - number, string, boolean, null, undefined, object
    TS - number, string, boolean, null, undefined, object, any, unknown, never, enum, tuple

    TS is JS with type checking and more...
 */
//=================================================================
let sales = 123456789;
console.log(sales);
let course = `TypeScript`;
let is_published = true;
let level;
// if you will not give a type, the TS complier will assume that its type is 'any'.
level = 1;
level = 'a';
// you have reassigned the variable to a different type that is against the ideals of the TS language.
//TODO: AVOID using type any.
function render(document) {
    console.log(document);
}
//=================================================================
// Arrays
let numbers = [1, 2, 3];
let nums = [];
nums.push(1);
// typescript gives us the advantage of code completion or intellisense.
// it will give hints about the function that you can use.
// not available for javascript
numbers.forEach(n => {
    console.log(n.toExponential());
});
//===================================================================
//Tuples -> additional feature given by TS
// it is a fixed length array where each element has a particular type.
// internally tuples compile to JS array only!
// useful for K-V pairs!, any more than 2 elements, TS compiler will allow;
// but it will make no sense
let user = [1, "Kunal"];
console.log(user[0].toFixed); // number
console.log(user[1].charAt(2)); // string
// internally 
//===================================================================
let red = 'red';
let blue = 'blue';
let green = 'green';
;
// PascalCase
var Color;
(function (Color) {
    Color["RED"] = "red";
    Color["BLUE"] = "blue";
    Color["GREEN"] = "green";
})(Color || (Color = {}));
;
let mySize = 5 /* Size.XXL */;
console.log(mySize);
//===================================================================
// functions
// TS helps us with common JS problems when we use functions.
function calculateTax(income, percent) {
    let ans;
    if (income > 700000) {
        ans = income * percent;
    }
    else {
        ans = income;
    }
    return ans;
}
console.log(calculateTax(50000, 10));
let kunal = {
    id: 1,
    name: "KUNAL"
};
console.log(kunal);
//===================================================================
// UNION TYPES
// length can be any of number or string
function cmToM(length) {
    // type narrowing
    if (typeof length === `number`) {
        return length / 100;
    }
    else {
        return parseInt(length) / 100;
    }
}
console.log(123 + " cm = " + cmToM(123) + " m");
console.log(187 + " cm = " + cmToM(`187`) + " m");
let textBox = {
    drag() {
        console.log("Text");
    },
    resize() {
        console.log("Box");
    },
};
//===================================================================
// Literal Type
let q1 = 50;
q1 = 40.4;
// see both the type of numbers are valid.
// so instead of annotationg with number we assign a exact(literal) number to it.
let quantity = 50;
let q2 = 50;
q2 = 100;
let school = 'XL';
school = 'XXL';
//===================================================================
// Nullable types
// TS is very strict with working with null and undefined values
// they are common source of bugs in our application
function greet(name) {
    if (name) {
        console.log("Hey!" + name.toUpperCase());
    }
    else {
        console.log("Hola!");
    }
}
greet(null);
greet(undefined);
// ? is used to make that property optional
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let cust = getCustomer(0);
// console.log(cust.birthday);
//cust might be null
// solution ->
if (cust !== null && cust !== undefined) {
    console.log(cust.birthday);
}
// Optional property access operator => ?. - will go ahead only if not null or undefined
console.log((_a = cust === null || cust === void 0 ? void 0 : cust.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
// optional element access operator
// arr?.[0]
// optional call
let logger = (message) => {
    console.log(message);
};
logger('a');
// but what if -> 
let log = null;
// log('a');
// this will throw an error! so we use optional call operator
log === null || log === void 0 ? void 0 : log('a');
// will call the function log only if log is referencing an acutal function
// otw we will get undefined.
//===================================================================
// Type Inference
// the TS complier will automatically decide the type of variable
// so it is no necessary to write the type of variable
const arr = [1, 2, 3, 4];
const myArr = [...arr, 5, 6];
console.log(myArr);
// anything after colon is type.
function add(a, b) {
    return a + b;
}
let ans = add(1, 2);
console.log(ans);
//console.log(add("s",2));//should fail
const sum = (x, y) => {
    return x + y;
};
let op = sum(1, 3);
console.log(op);
//# sourceMappingURL=index.js.map