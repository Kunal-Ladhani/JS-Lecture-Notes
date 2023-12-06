"use strict";
var _a, _b;
console.log('===================================================================');
/*
    JS - number, string, boolean, null, undefined, object
    TS - number, string, boolean, null, undefined, object, any, unknown, never, enum, tuple

    TS is JS with type checking and more...
    so all valid JS code is also valid TS code

    by default TS compiler will transpile to ES5, but we can configure it to transpile to ES6.
*/
let age = 20;
if (age < 18) {
    console.log("Cannot vote.");
}
else {
    console.log("You can vote.");
}
console.log('===================================================================');
let sales = 123456789;
console.log(sales);
let course = `TypeScript`;
let is_published = true;
let level;
// if you will not give a type, the TS complier will assume that its type is 'any'.
level = 1;
level = 'a';
// if the type is 'any' then you can reassign the variable to a different type of data
// that is against the "ideals" of the TS language.
// NOTE: AVOID using type any.
function render(document) {
    console.log(document);
}
console.log('===================================================================');
// IMPORTANT: Arrays
let numbers = [1, 2, 3];
let nums = [];
nums.push(1);
nums.push(false);
nums.push("kunal");
// typescript gives us the advantage of code completion or intellisense.
// it will give hints about the function that you can use.
// not available for javascript
numbers.forEach(n => {
    console.log(n.toExponential());
});
nums.forEach(n => n.toString());
console.log('===================================================================');
// IMPORTANT: Tuples -> additional feature given by TS
// it is a fixed length array where each element has a particular type.
// internally tuples compile to JS array only!
// useful for K-V pairs!, any more than 2 elements, TS compiler will allow;
// but it will make no sense
let user = [1, "Kunal"];
console.log(user[0].toFixed); // number
console.log(user[1].charAt(2)); // string
// internally 
// let user = [1, "Kunal"];
console.log('===================================================================');
// lets say you want to rep. colors or tshirt sizes!
// you can use variables, but it would increase very fastly! eg -
let red = 'red';
let blue = 'blue';
let green = 'green';
;
let mySize = 5 /* Size.XXL */;
console.log(mySize); // 5
// PascalCase
// it will generate a verbose code for this, as we have not used the constant keyword
var Color;
(function (Color) {
    Color["RED"] = "red";
    Color["BLUE"] = "blue";
    Color["GREEN"] = "green";
})(Color || (Color = {}));
;
// if you set string value to enum object. then you will have to set others too!
console.log('===================================================================');
// IMPORTANT: Functions
/** NOTE :
 *  A parameter is a variable in a function definition.
 *  It is a placeholder and hence does not have a concrete value.
 *  An argument is a value passed during function invocation.
*/
// TS helps us with commonly occuring JS problems when we use functions.
// compiler will show you return type.
// ALWAYS PROPERLY ANNOTATE YOUR FUNCTIONS !
// we can also make arg as optional by using = taxYear ?: number
// then we need to give what to use if taxYear is not supplied.
// (taxYear || 2023) > 2022
// Better Way => use a default value for taxYear, instead of making it optional.
function calculateTax(income, percent = 30, taxYear = 2023) {
    let ans;
    if (income > 700000 && taxYear > 2022) {
        ans = income * percent;
    }
    else {
        ans = income * 1.3;
    }
    return ans;
}
// in JS you can pass more or less args than params defined. it does not care.
// TS will! thats the beauty of TS.
console.log(calculateTax(50000, 10, 2022));
console.log(calculateTax(7000000, 15));
/** BUT -
 * Optional parameters must be at the back and can only be left out if all later arguments are left out as well.
 * Otherwise JavaScript doesn't know for which parameter you passed a value.
*/
// Eg - here 2022 will be taken as percent not as the year!
console.log(calculateTax(10000, 2022));
console.log('===================================================================');
// IMPORTANT: Objects
// objects are dynamic in JS
// their shape can change throughout the life of the program.
let employee = {
    id: 1,
    salary: 50000
};
// employee.name = "Suresh"; 
// employee["name"] = "Suresh"; 
// above is valid in JS. But,
// above will give an error in TS -
// Property 'name' does not exist on type '{ id: number; salary: number; }'
// we can explicity apply a type annotation to objects too! like this -
let emp = {
    id: 1,
    salary: 50000,
    name: "Suresh",
    retire: (date) => {
        console.log(date);
    }
};
// NOTE: Don't blindly use features of any language, see that the code is logically consistent !!
employee.id = 12;
// we have defined the shape of Student object.
// now we can use it to define multiple students.
let kunal = {
    id: 1,
    name: "KUNAL",
    is_PCM: true
};
let rohit = {
    id: 1,
    name: "ROHIT",
    is_PCM: false,
    is_monitor: true
};
console.log(kunal);
console.log(rohit);
console.log('===================================================================');
// IMPORTANT: UNION TYPES (use |)
// using union type we can give a function param or a variable more than one types.
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
const cmToFoot = (height) => {
    // type narrowing
    if (typeof height === `number`) {
        return height / 30.48;
    }
    else {
        return parseInt(height) / 30.48;
    }
};
function covertHeight(height) {
    if (typeof height === "number")
        console.log(height + " cm = " + cmToFoot(height).toFixed(3) + " foot");
    else
        console.log(height + " cm = " + cmToFoot(parseFloat(height)).toFixed(3) + " foot");
}
covertHeight(183.5);
covertHeight("184");
// union type is not a part of the transpiled JS code, only for the TS compiler. 
console.log('===================================================================');
// this is a intersection type that is both draggable and resizable.
let textBox = {
    drag() {
        console.log("dragging");
    },
    resize() {
        console.log("resizing");
    },
};
console.log('===================================================================');
// IMPORTANT: Literal Type (when we want to give a exact or specific value)
let quant = 50;
quant = 40.4;
// see both the type of numbers are valid.
// so instead of annotationg with number we assign a exact(literal) number to it.
let quantity = 50;
let q1 = 50;
let q2 = 100;
q1 = 100;
q2 = 50;
let schoolShirt = 4 /* Size.XL */;
schoolShirt = 5 /* Size.XXL */;
console.log('===================================================================');
// IMPORTANT: Nullable types
// bydefault - TS is very strict with working with null and undefined values
// as, they are common source of bugs in our application
function greet(name) {
    if (name) {
        // if truthy
        console.log("Hey!" + name.toUpperCase());
    }
    else {
        // if falsy
        console.log("Hola!");
    }
}
greet(null);
greet(undefined);
// it will be valid JS, but TS will not allow this as it will cause error.
// by default TS compiler will stop us from using null or undefined values.
// strictNullChecks:true bydefault as a part of strict mode.
// if strict mode true -> strict null check also true
// but we can override it inside tsconfig file.
// ideally we should never turn it off!
console.log('===================================================================');
// ? is used to make that property optional
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let cust = getCustomer(0);
// console.log(cust.birthday);
//cust might possibly be null
// solution ->
if (cust !== null && cust !== undefined) {
    console.log(cust.birthday);
}
// simpler way -> 
// IMPORTANT: Optional property access operator => ?.
//  will go ahead only if not null or undefined
console.log((_a = cust === null || cust === void 0 ? void 0 : cust.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let customer1 = getCustomer(1);
console.log((_b = customer1 === null || customer1 === void 0 ? void 0 : customer1.birthday) === null || _b === void 0 ? void 0 : _b.getFullYear());
// IMPORTANT: optional element access operator
// array?.[0]
// if array is not null or undefined then 0th element is accessed
// IMPORTANT: optional call 
let logger = (message) => {
    console.log(message);
};
logger('hi this is logged using logger function');
// but what if -> 
let log = null;
// log('a');
// this will throw an error! as log is null
// so we use optional call operator
const output = log === null || log === void 0 ? void 0 : log('a');
console.log(output);
// will call the function log only if log is referencing an acutal function
// otw we will get undefined.
console.log('===================================================================');
// IMPORTANT: Nullish Coaelsing Operator
// when working with null and undefined we need to fallback to a default value
// falsy values in JS are - (undefined, null, '', false, 0) 
let speed = null;
let rider = 'kunal';
let ride = {
    // speed !== null ? speed : 40
    // Better way -> nullish coalesing operator
    // if speed is not null or undefied use speed else use 40
    speed: speed !== null && speed !== void 0 ? speed : 40,
    name: rider !== null && rider !== void 0 ? rider : 'anonymous'
};
console.log(ride);
console.log('===================================================================');
// IMPORTANT: Type Inference
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
console.log('===================================================================');
// IMPORTANT: Type Assertion
// Sometimes we know more about the type of a value than TS compiler.
let phone = document.getElementById('phone');
// HTMLElement is a class in JS
// HTMLInputElement is its child class etc.
console.log(phone.value);
// as will not perform any type conversion
// its for purely telling the compiler.
// if type is not as we said then the program will crash there.
//# sourceMappingURL=index.js.map