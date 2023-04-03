// spread operator
// can be used with arrays and objects

// spread will take the array/object, pull out all elements / properties of object
// and put it to whatever is around the spread operator.
const arr = ['batman', 'robin', 'joker', 'riddler', 'enigma'];

const arkham = [...arr.slice(2, 5), `bane`, `ra's al ghul`];
console.log(arkham);

const myObj = {
    name: "Kunal",
    age: 25,
    greet() {
        // syntax for object functions
        return "Hi, my name is " + this.name;
    }
};

const newObj = {
    work: "software engineer",
    ...myObj
};
console.log(newObj);

// rest operator
// its essentially the opposite of spread operator

const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};

console.log(toArray(1, 2, 3, 4, 5));
// JS will allow us to pass more than the used arguments,
// but will not do anything with them.

// here we can use the rest operator

const toArrayUsingRest = (...args) => {
    return {
        arguments: args,
        length: args.length
    };
};

console.log(toArrayUsingRest(1, 2, 3, 4, 5));
// the ... functionality depends on the use-case and the context in which you use it
// you can use it to spread or extract elements/properties of a arrat/object
// you can use it to consolidate all the arguments passed to a function into an array;

// TODO: readup on this
// NOTE: this is like var args of Java.
// FIXME: 
// BUG:  
// HACK:
// BRACKETS: {arch}