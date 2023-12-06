console.log('===================================================================');

/*
    JS - number, string, boolean, null, undefined, object
    TS - number, string, boolean, null, undefined, object, any, unknown, never, enum, tuple

    TS is JS with type checking and more...
    so all valid JS code is also valid TS code 

    by default TS compiler will transpile to ES5, but we can configure it to transpile to ES6.
*/

let age: number = 20;
if (age < 18) {
    console.log("Cannot vote.")
} else {
    console.log("You can vote.")
}

console.log('===================================================================');

let sales: Number = 123_456_789;
console.log(sales);

let course: String = `TypeScript`;

let is_published: Boolean = true;

let level;
// if you will not give a type, the TS complier will assume that its type is 'any'.


level = 1;
level = 'a';

// if the type is 'any' then you can reassign the variable to a different type of data
// that is against the "ideals" of the TS language.

// NOTE: AVOID using type any.

function render(document: any) {
    console.log(document);
}

console.log('===================================================================');

// IMPORTANT: Arrays
let numbers: number[] = [1, 2, 3];
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

let user: [number, string] = [1, "Kunal"];
console.log(user[0].toFixed);   // number
console.log(user[1].charAt(2)); // string

// internally 
// let user = [1, "Kunal"];

console.log('===================================================================');

// lets say you want to rep. colors or tshirt sizes!
// you can use variables, but it would increase very fastly! eg -

let red = 'red';
let blue = 'blue';
let green = 'green';

// Enums -> list of related constants
// compiler will generate more optimized code for enum defined as const
const enum Size { S = 1, M, L, XL, XXL, XXXL };
let mySize: Size = Size.XXL;
console.log(mySize);    // 5

// PascalCase
// it will generate a verbose code for this, as we have not used the constant keyword
enum Color { RED = 'red', BLUE = 'blue', GREEN = 'green' };
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
function calculateTax(income: number, percent: number = 30, taxYear: number = 2023): number {
    let ans;
    if (income > 7_00_000 && taxYear > 2022) {
        ans = income * percent;
    }
    else {
        ans = income * 1.3;
    }
    return ans;
}

// in JS you can pass more or less args than params defined. it does not care.
// TS will! thats the beauty of TS.

console.log(calculateTax(50_000, 10, 2022));
console.log(calculateTax(70_00_000, 15));

/** BUT -
 * Optional parameters must be at the back and can only be left out if all later arguments are left out as well.
 * Otherwise JavaScript doesn't know for which parameter you passed a value.
*/
// Eg - here 2022 will be taken as percent not as the year!
console.log(calculateTax(10_000, 2022));


console.log('===================================================================');

// IMPORTANT: Objects
// objects are dynamic in JS
// their shape can change throughout the life of the program.

let employee = {
    id: 1,
    salary: 50_000
};
// employee.name = "Suresh"; 
// employee["name"] = "Suresh"; 

// above is valid in JS. But,
// above will give an error in TS -
// Property 'name' does not exist on type '{ id: number; salary: number; }'

// we can explicity apply a type annotation to objects too! like this -
let emp: {
    readonly id: number,
    salary: number,
    name: string,
    // we can make properties optional too!
    is_engineer?: boolean,
    // we can define functions too! 
    // declare only the types of parameters and return type (void here)
    retire: (date: Date) => void
} = {
    id: 1,
    salary: 50_000,
    name: "Suresh",
    retire: (date: Date) => {
        console.log(date);
    }
};
// NOTE: Don't blindly use features of any language, see that the code is logically consistent !!

employee.id = 12;
// no error here

// if we want to prevent devs to accidently modify the property in future, use keyword - readonly
// eg - 

// emp.id = 11;
// see it will give error above - 
// Cannot assign to 'id' because it is a read-only property.

// to make another employee we will have to duplicate the structure. -> violaties DRY principle!
// other emp might have more or less properties, -> structure inconsistency.
// so we defined custom type for objects using "type alias".

// IMPORTANT: TYPE ALIAS
type Student = {
    readonly id: number,
    name: string,
    is_PCM: boolean,
    is_monitor?: boolean
};
// we have defined the shape of Student object.

// now we can use it to define multiple students.
let kunal: Student = {
    id: 1,
    name: "KUNAL",
    is_PCM: true
};

let rohit: Student = {
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

const cmToFoot = (height: number | string): number => {
    // type narrowing
    if (typeof height === `number`) {
        return height / 30.48;
    } else {
        return parseInt(height) / 30.48;
    }
}

function covertHeight(height: number | string): void {
    if (typeof height === "number")
        console.log(height + " cm = " + cmToFoot(height).toFixed(3) + " foot");
    else
        console.log(height + " cm = " + cmToFoot(parseFloat(height)).toFixed(3) + " foot");
}

covertHeight(183.5);
covertHeight("184");

// union type is not a part of the transpiled JS code, only for the TS compiler. 

console.log('===================================================================');

// IMPORTANT: Intersection Type (use &)

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;
// this is a intersection type that is both draggable and resizable.

let textBox: UIWidget = {
    drag() {
        console.log("dragging");
    },
    resize() {
        console.log("resizing");
    },
}

console.log('===================================================================');

// IMPORTANT: Literal Type (when we want to give a exact or specific value)

let quant: number = 50;
quant = 40.4;
// see both the type of numbers are valid.


// so instead of annotationg with number we assign a exact(literal) number to it.
let quantity: 50 = 50;

// quantity = 51; gives error
// but it will not be much useful as we are hardcoding values into each variable.

// better to define a custom type for all quantities.
type Quantity = 50 | 100;   // LITERAL - exact or specific.

let q1: Quantity = 50;
let q2: Quantity = 100;

q1 = 100;
q2 = 50;

// literal types can also be strings.
type shirt = Size.XL | Size.XXL;

let schoolShirt: shirt = Size.XL;
schoolShirt = Size.XXL;

console.log('===================================================================');

// IMPORTANT: Nullable types
// bydefault - TS is very strict with working with null and undefined values
// as, they are common source of bugs in our application

function greet(name: string | null | undefined): void {
    if (name) {
        // if truthy
        console.log("Hey!" + name.toUpperCase());
    } else {
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

// Optional Chaining

type Customer = {
    birthday?: Date
};

// ? is used to make that property optional

function getCustomer(id: number): Customer | null | undefined {
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
console.log(cust?.birthday?.getFullYear());

let customer1 = getCustomer(1);
console.log(customer1?.birthday?.getFullYear());


// IMPORTANT: optional element access operator
// array?.[0]
// if array is not null or undefined then 0th element is accessed

// IMPORTANT: optional call 

let logger: any = (message: any) => {
    console.log(message);
};

logger('hi this is logged using logger function');

// but what if -> 
let log: any = null;
// log('a');

// this will throw an error! as log is null

// so we use optional call operator
const output = log?.('a');
console.log(output);

// will call the function log only if log is referencing an acutal function
// otw we will get undefined.


console.log('===================================================================');
// IMPORTANT: Nullish Coaelsing Operator

// when working with null and undefined we need to fallback to a default value

// falsy values in JS are - (undefined, null, '', false, 0) 

let speed: number | null = null;
let rider: string | null | undefined = 'kunal';
let ride = {
    // speed !== null ? speed : 40
    // Better way -> nullish coalesing operator
    // if speed is not null or undefied use speed else use 40
    speed: speed ?? 40,
    name: rider ?? 'anonymous'
};

console.log(ride);

console.log('===================================================================');

// IMPORTANT: Type Inference

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

let op = sum(1, 3);
console.log(op);

console.log('===================================================================');

// IMPORTANT: Type Assertion
// Sometimes we know more about the type of a value than TS compiler.

// let phone = document.getElementById('phone') as HTMLInputElement;
// HTMLElement is a class in JS
// HTMLInputElement is its child class etc.

// console.log(phone.value);
// as will not perform any type conversion
// its for purely telling the compiler.
// if type is not as we said then the program will crash

// instead of using as keyword we can use diamond operator here.
// another syntax -
// let phone = <HTMLInputElement> document.getElementById('phone');

console.log('===================================================================');

// IMPORTANT: unknown type

// using any type is risky!
// TS will not perform any type checking here.
function renderer(doc: any): void {
    doc.walk();
    doc.fly();
    doc.whateverWeWant();
    // if any of these does not exist for doc then prog will crash. 
}

// better to use unknown type.
function displyer(doc: unknown): void {
    // doc.walk();
    // doc.fly();
    // doc.whateverWeWant();
    // if doc is any type
    // if any of these does not exist for doc then prog will crash. 

    // if doc is unknown type
    // then we will have to do type narrowing
    if (typeof doc === 'string') {
        doc.toUpperCase();
        // this will work only for primitive types
    }

    // if you have custom objects created with classes
    // we have to use "instanceof" operator
    // eg -
    // if(doc instanceof emp) 

}

console.log('===================================================================');

// IMPORTANT: never type

// never will rep the values that will never occur.
// we can annotate the function with never to say that this function never returns.

function reject(message: string): never {
    throw new Error(message);
}
// this function will never return, will always throws exception

// constantly watches a message queue for events.
function processEvents(): never {
    while (true) {
        // read a Message From Queue
    }
}

// compiler will infer void type bydefault
// so we should use never type 


// processEvents();
// console.log('hello');
// compilation error saying that code will never reach here.
// will never get executed as the above function never returns.


// reject("jello");
// console.log("hello");
// compilation error saying that code will never reach here.
// will never get executed as the above function never returns.


console.log("---------------------------OOP--------------------------------");

