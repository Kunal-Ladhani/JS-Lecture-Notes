// NOTE: ES5 Patterns to create an object

// NOTE: Factory functions -> used to create new objects
// we return a object in factory functions.
// eg-

let circle = {
    radius: 2,
    location: {
        x: 1,
        y: 3
    },
    draw: () => {
        console.log('circle');
    }
}
// but we cannot do this object literal declaration again and again!

const circleFactory = (r, x, y) => {
    return {
        radius: r,
        location: {
            x: x,
            y: y
        },
        draw: function () {
            console.log(`made a circle of radius ${this.radius}.`);
        }
    }
}

let circle2 = circleFactory(2, 3, 1);
circle2.draw();
console.log(circle2.radius);
console.log(circle2.location);

// NOTE: constructor function
// first letter in capital => PascalCase

// we use new keyword to get a new instace of circle.
// we will use this keyword here.
// we use this method because it looks like class.

// ES5 did not have class

function Circle(rad, xCor, yCor) {
    this.radius = rad;
    this.location = {
        x: xCor,
        y: yCor
    };
    this.draw = function () {
        console.log('draw')
    }
};

const circle3 = new Circle(1, 1, 3);
console.log(circle3.radius);
console.log(circle3.location);
circle3.draw();

/* 
 * NOTE: Functions are Objects in JS
 * 
 * const func = new Function(...args, `func body`);
 * 
 * this will make a function.
 *
 */

const circleFun = new Function('rad', 'xCor', 'yCor', `
this.radius = rad;
    this.location = {
        x: xCor,
        y: yCor
    };
    this.draw = function () {
        console.log('draw')
    }
`);

const circle4 = new circleFun(1, 1, 3);
console.log(circle4.radius);
console.log(circle4.location);
circle4.draw();

// internal constructor functions ->
console.log(circle.constructor);
console.log(circle2.constructor);
console.log(circle3.constructor);
console.log(circle4.constructor);


/* NOTE: 
 * Every object has a constructor property.
 * it references the function (constructor func) that was used to create that object.
 * 
 * Objects -
 * let x = {};
 * 
 * same as 
 * 
 * let x = new Object();
 * 
 * Strings -
 * let str = 'abc' or "abc" or `abc`;
 * 
 * same as
 * 
 * let str = new String();
 * 
 * Number -
 * let num = 1;
 * 
 * same as
 * 
 * let num = new Number(1);
 * Boolean -
 * let flag = true;
 * 
 * same as
 * 
 * let flag = new Boolean(true);
 * 
 */

const circle5 = Circle.call({}, 1, 2, 3);
const circ = new Circle(1, 2, 3);

const circle6 = Circle.apply({}, [1, 2, 3]);

/* NOTE:
 * new keyword will internally create an empty object,
 * and pass it as 1st arg to .call() method of Circle function.
 *
 * the object (that we pass to call() method,
 * it will determine the context for 'this' for the object that we are creating (circle5, circle6... etc.)
 *
 */

/* NOTE :
 * only difference between .call() and .apply() method is -
 * in .apply() we pass an array of args instead of separate args.
 * 
 */