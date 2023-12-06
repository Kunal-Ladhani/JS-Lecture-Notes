// rest operator
// its essentially the opposite of spread operator

const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};

console.log(toArray(1, 2, 3, 4, 5));
// JS will allow us to pass more than the used arguments,
// but will not do anything with them.

// here we can use the rest operator
// will merge all the arguments in array - args, we can use that.
const toArrayUsingRest = (...args) => {
    return {
        arguments: args,
        length: args.length
    };
};

console.log(toArrayUsingRest(1, 2, 3, 4, 5));
// the ... functionality depends on the use-case and the context in which you use it
// you can use it to spread or extract or pull elements/properties of a arrat/object
// you can use it to consolidate or merge all the arguments passed to a function into an array;

// TODO: readup on this
// NOTE: this is like var args of Java.