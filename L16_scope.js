console.log(`=================================== var keyword ============================================`);
console.log(var1);
// hoisting
//var var1; - undefined for now

var var1 = 10; // global scope

console.log(var1); // 10

function fun1() {
    console.log(var2); // undefined

    var var2 = 40; // local scope
    var2 = var2 + 1;
    var2++;
    console.log(var2);

    // console.log(var3);
    // Cannot access var3 before initialization.

    let var3 = 50;
    console.log(var3);
}

fun1();

// console.log(var2);
// Reference Error: var2 is not defined

// console.log(var3);
// Reference Error : var3 is not defined.

/* 
    NOTE -

    var has global or functional scope depending on declaration
    var -> globally declared -> global scope
    var -> locally declared -> local scope
    var -> can be redeclared
    var -> can be updated
    var -> can be used before declaration - undefined

*/


// console.log(var4);
// Reference Error : var4 is not defined.

function fun2() {
    console.log(var4);  // undefined
    var var4 = 11;

    var4++;
    console.log(var4);
    // var can be reassigned to a different type
    var4 = 'c';
    console.log(var4);

    var4 = "This is a string";
    console.log(var4);
}

fun2();
// console.log(var4);
// Reference Error : var4 is not defined


console.log(`=================================== ES6 ====================================================`);

console.log(`=================================== let keyword ============================================`);

//console.log(var5);
//Reference Error: cannot access b before Initialization
let var5 = 20;
console.log(var5);



/*
    let -> block scope -> can't be accessed outside that block
    let -> cannot redeclare the variable in the same scope
    (means you can redeclare with same name inside a function/block)
    let -> can update the variable
    let -> cannot be used before declaration (Reference Error)
*/

console.log(`=================================== const keyword ============================================`);

// console.log(var6);
// Reference Error: cannot access var6 before Initialization

const var6 = 30;

// var6 = var6 + 1;
// var6++;
// TypeError : assignment to constant variable

console.log(var6);

/*
    const-> block scope
    const -> value cannot be update
    const -> needs to be initialized while declaring
    (otw TypeError : assignment to constant variable)
    const -> cannot redeclare the variable in the same scope
    cannot change the property of the const object
    can change the value of the propery of a const object (SyntaxError)
*/