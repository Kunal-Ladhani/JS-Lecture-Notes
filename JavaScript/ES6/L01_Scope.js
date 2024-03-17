console.log("------------------------NO KEYWORD------------------------------");

// console.log(undeclared); // reference error - x is not defined
// console.log(x);  // reference error - x is not defined
x = 50;
console.log(x);

undeclared = "kunal works at niyo";
console.log(undeclared);
{
    undeclared = 550;
    console.log(undeclared);
}
console.log(undeclared);

console.log("------------------------VAR KEYWORD------------------------------");

// var -> global or functional scope
// var -> globally declared -> global scope
// var -> locally declared -> local scope / functional scope
// var -> can be re-declared with same or another datatype 
// var -> can be updated - reassigned to same or another datatype
// var -> can be used before declaration - undefined - hoisted to top of execution context

console.log(a); // undefined
var a = 10;
console.log(a);

var a = "Redeclared 'a' as a string";
console.log(a);

// console.log(f) // reference error - f is not defined

function ab() {
    var f = 11;
    console.log(f); // locally available
    console.log(a); // globally available
}
ab();

// console.log(f) // refrence error - f not defined

console.log("------------------------LET KEYWORD------------------------------");

// let -> block scope -> can't be accessed outside that block
// let -> cannot redeclare the variable in the same scope
// (means you can redeclare with same name inside a function/block)
// let -> can update and reassign the variable
// let -> cannot be used before declaration (Reference Error)

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b);

b = b + 1;
b++;
console.log(b); // updated


b = "Kunal"; // reassigned  
console.log(b);

// let b = "Ladhani";   // redeclare not allowed in same block
// cannot redeclare block scope variable 'b'

function test() {
    let b = "Ladhani";  // but we can redeclare it inside another block
    console.log(b);

    let e = 50;
    console.log(e);
}
test();

// console.log(e);    // ReferenceError: e is not defined


// console.log(d);    // ReferenceError: d is not defined

function myFun() {
    var d = 40; // local scope
    console.log(d);

    b = b + 1;
    console.log(b); // updating global scope let variable
}
myFun();

// console.log(d);    // ReferenceError: d is not defined


console.log("-------------------------CONST KEYWORD----------------------------");


// const-> block scope -> can't be accessed outside that block
// const -> cannot redeclare the variable in the same scope
// const -> value cannot be update
// const -> needs to be initialized while declaring (otw TypeError : assignment to constant variable)

// cannot change the property of the const object
// can change the value of the propery of a const object
// means - we can change the value of the object [object or array] a const is referencing to,
// but cannot reassign it to another object 


// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
// c++;
// ++c;
// c = c + 1; // TypeError : assignment to constant variable
console.log(c);

const arr = [1, 2, 3, 4];
console.log(arr);

arr[2] = 44;
console.log(arr);

// arr = [44, 55];
// TypeError: Assignment to constant variable.

const myObj = {
    firstName: "Kunal",
    lastName: "Ladhani",
    company: "Vinculum"
};
console.log(myObj);

myObj['company'] = "Niyo";
console.log(myObj);

myObj.company = "Atlassian";
console.log(myObj);

myObj.CTC = 55;
console.log(myObj);

//TypeError: Assignment to constant variable.
// myObj = {
//     name: "Rohit Ladhani",
//     profession: "Surgeon",
//     CTC: 90
// };