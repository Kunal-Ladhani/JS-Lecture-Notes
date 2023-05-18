console.log("----------FUNCTIONS IN ES5------------");

// NOTE: ES5 way of creating a function.
function fun1(name, age) {
    // all the function params act like local variables.
    // they have function level scope.
    return {
        name: name,
        age: age
    };
};

console.log(fun1("Kunal", 24));
console.log(typeof (fun1("Kunal", 23)));

// only function name without brackets().
console.log(fun1);
console.log(typeof fun1);