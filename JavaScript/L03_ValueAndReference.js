// NOTE : Pass by VALUE and Pass by REFERENCE

console.log('_____________________PASSING VAL_________________________');

let x = 10;
let y = x; // an actual copy is created.

x++;
console.log(x);    // 11
console.log(y);    // 10

/*
 * the value are separately stores in x and y.
 *
 * FOR PRIMITIVES, THE VALUE IS IMMUTABLE.
 * THEY ARE IMMUTABLE DATATYPES.
 * 
 * IMMUTABLILITY -> ONCE CREATED THE VALUE CANNOT BE CHANGED!
 * IT WILL BE ESSENTIAL FOR FUNCTIONAL PROGRAMMING -> WE'LL SEE LATER.
 * 
 * FOR NOW -> an actual copy of the value will be created for y and stored in stack.
 * */

const incrementor = function (num) {
    num++;
    console.log(num);   // see 12 here. as its a local copy.
}

incrementor(x);
// should inc value of x1 by 1.

// but a local copy of x1 is stored in num, that is increased.
// but its scope dies with function ends.
// so now x1 value is same as before 11.

console.log(x);    // 11

console.log('_____________________PASSING REF_________________________');

let node1 = {
    val: 10
};

let node2 = node1;  // only the reference is copied. a separate object is NOT created.

node2.val++;
node2.name = 'Kunal';

console.log(node2);    // as expected.
console.log(node1);    // but we did not change node1 !

/*
 * the object is stored once only in heap.
 * node1 and node2 are only storing refences (in stack space).
 * both hold the reference to the same memory location (inside heap).
 * so any change made by node2, will show up with node1.
 * */