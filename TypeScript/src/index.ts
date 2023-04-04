let age: number = 20;
if (age < 18) {
    console.log("Cannot vote.")
} else {
    console.log("You can vote.")
}

//=================================================================

/*
    JS - number, string, boolean, null, undefined, object
    TS - number, string, boolean, null, undefined, object, any, unknown, never, enum, tuple

    TS is JS with type checking and more...
 */

//=================================================================

let sales: Number = 123_456_789;
console.log(sales);

let course: String = `TypeScript`;

let is_published: Boolean = true;

let level;

// if you will not give a type, the TS complier will assume that its type is 'any'.

level = 1;
level = 'a';

// you have reassigned the variable to a different type that is against the ideals of the TS language.
//TODO: AVOID using type any.

function render(document: any) {
    console.log(document);
}

//=================================================================

// Arrays
let numbers: number[] = [1, 2, 3];
let nums : number[] = [];
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

let user: [number, string] = [1, "Kunal"];
console.log(user[0].toFixed);   // number
console.log(user[1].charAt(2)); // string

// internally 

//===================================================================


let red = 'red';
let blue = 'blue';
let green = 'green';
// you can use variables, but it would increase very fastly!

// Enums -> list of related constants
// compiler will generate more optimized code for enums with const
const enum Size { S = 1, M, L, XL, XXL, XXXL };

// PascalCase
enum Color { RED = 'red', BLUE = 'blue', GREEN = 'green' };

let mySize = Size.XXL;
console.log(mySize);

//===================================================================

// functions
// TS helps us with common JS problems when we use functions.
function calculateTax(income: number, percent: number): number {
    let ans;
    if (income > 7_00_000) {
        ans = income * percent;
    }
    else {
        ans = income;
    }
    return ans;
}

console.log(calculateTax(50_000, 10));


//===================================================================

// Objects

// type alias
type student = {
    readonly id: number,
    name?: string
};

let kunal: student = {
    id: 1,
    name: "KUNAL"
};

console.log(kunal);

//===================================================================

// UNION TYPES

// length can be any of number or string
function cmToM(length: number | string): number {
    // type narrowing
    if (typeof length === `number`) {
        return length / 100;
    } else {
        return parseInt(length) / 100;
    }
}

console.log(123 + " cm = " + cmToM(123) + " m");

console.log(187 + " cm = " + cmToM(`187`) + " m");

//===================================================================

// intersection type

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag() {
        console.log("Text");
    },
    resize() {
        console.log("Box");
    },
}

//===================================================================

// Literal Type

let q1: number = 50;
q1 = 40.4;

// see both the type of numbers are valid.

// so instead of annotationg with number we assign a exact(literal) number to it.

let quantity : 50 = 50;
// quantity = 51; gives error
// but it will not be much useful so...

type Quantity = 50 | 100;
let q2 : Quantity = 50;
q2 = 100;
// see it will be more useful with union types.

type shirt = 'XL' | 'XXL';
let school : shirt = 'XL';
school = 'XXL';

//===================================================================

// Nullable types
// TS is very strict with working with null and undefined values
// they are common source of bugs in our application

function greet(name : string | null | undefined) {
    if(name) {
        console.log("Hey!" + name.toUpperCase()); 
    } else {
        console.log("Hola!");
    }
}

greet(null);
greet(undefined);
// it will be valid JS, but TS will not allow this as it will cause error.

// by default TS compiler will stop us from using null or undefined values.
// strict mode true -> strict null check also true, but we can override it.


//===================================================================

// Optional Chaining

type Customer = {
    birthday?: Date
};

// ? is used to make that property optional

function getCustomer(id: number) : Customer | null | undefined {
    return id === 0 ? null : { birthday : new Date() };
}

let cust = getCustomer(0);
// console.log(cust.birthday);
//cust might be null

// solution ->
if(cust !== null && cust !== undefined) {
    console.log(cust.birthday);
}

// Optional property access operator => ?. - will go ahead only if not null or undefined
console.log(cust?.birthday?.getFullYear());

// optional element access operator
// arr?.[0]

// optional call
let logger : any = (message : any) => {
    console.log(message);
};

logger('a');
// but what if -> 
let log : any = null;

// log('a');
// this will throw an error! so we use optional call operator
log?.('a');
// will call the function log only if log is referencing an acutal function
// otw we will get undefined.


//===================================================================

// Type Inference
// the TS complier will automatically decide the type of variable
// so it is no necessary to write the type of variable

const arr = [1, 2, 3, 4];
const myArr: number[] = [...arr, 5, 6];
console.log(myArr);

// anything after colon is type.

function add(a: number, b: number): number {
    return a + b;
}

let ans = add(1, 2);
console.log(ans);
//console.log(add("s",2));//should fail

const sum = (x: number, y: number): number => {
    return x + y;
}

let op = sum(1,3);
console.log(op);
