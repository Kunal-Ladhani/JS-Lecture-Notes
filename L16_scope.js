// node L17_scope.js

var a = 10; //global or functional scope

let b = 20;

const c = 30;
// c = c + 1; (TypeError : assignment to constant variable)


function myFun() {
    var d = 40; // local scope
    b = b+1; 
    let e = 50;
}

myFun();
// console.log(d)    //refrence error
// console.log(e)    //refrence error

// var -> globally declared -> global scope
// var -> locally declared -> local scope
// var -> can be redeclared
// var -> can be updated
// var -> can be used before declaration - undefined

// console.log(f) // gives undefined

function ab() {
    var f = 11;
    console.log(f)
}

// console.log(f) // refrence error - f not defined


// let -> block scope -> can't be accessed outside that block
// let -> cannot redeclare the variable in the same scope
// (means you can redeclare with same name inside a function/block)
// let -> can update the variable
// let -> cannot be used before declaration (Reference Error)

// const-> block scope
// const -> value cannot be update
// const -> needs to be initialized while declaring
// (otw TypeError : assignment to constant variable)
// const -> cannot redeclare the variable in the same scope
// cannot change the property of the const object
// can change the value of the propery of a const object (SyntaxError)