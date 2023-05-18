
console.log('----------------FUNCTIONS IN ES6----------------------');

// NOTE: ES6 syntax for Functions
// new way of writing functions -> arrow functions
// use arrow functions from now on...

const fun = (name, age) => {
    return `name is ${name} and age is ${age}.`;
};
// right side is anonymous function.
// we assign that to a named variable.

console.log(fun("Kunal", 24));

// normal arrow function synatax for ES6
const add = (a, b) => {
    return a + b;
}
console.log(add(1, 2));

// for one return statment you can remove the return keyword and enclosing parantheres.
const adder = (a, b) => a + b;
console.log(adder(3, 2));

// for one param you can remove the function parantheses.
const addTwo = a => a + 2;
console.log(addTwo(2));

// for no params you need to have a empty pair of braces on params side.
const addRandom = () => 1 + 9;
console.log(addRandom());

// use let and const -> ES6 Syntax (better)
// this keyword will refer to whoever called that function.
// if that is the class then it will refer to that classes object
// if its a function that this will refer to that function

// see => https://www.youtube.com/watch?v=Pv9flm-80vM&t=3s
