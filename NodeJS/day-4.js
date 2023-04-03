const myObj = {
    name: "Kunal",
    age: 25,
    greet: () => {
        // for anonymous functions this points to the parent scope
        // undefined as this here points to global node runtime scope
        return "Hi, my name is " + this.name;
    }
};
console.log(this);
console.log(" -> points to global node runtime scope.");
console.log(myObj.greet());

const myObj1 = {
    name: "Kunal",
    age: 25,
    greet: function () {
        return "Hi, my name is " + this.name;
    }
};

console.log(myObj1.greet());

const myObj2 = {
    name: "Kunal",
    age: 25,
    greet() {
        // syntax for object functions
        return "Hi, my name is " + this.name;
    }
};

console.log(myObj2.greet());

const arr = ['kunal', 'rohit', 'shayam'];
// array is a reference type 
// variable arr only stores the 1st element's address in memory.
console.log(arr);

// even if you change the array its pointing to...
arr.push('pramod');

// the reference has not changed so it does not matter.
console.log(arr);

// below is not allowed as you cannot reassign a const variable.
// arr = ['batman', 'robin', 'joker'];
console.log(arr);