// spread operator
// can be used with arrays and objects

// spread will take the array/object, pull out all elements / properties of object
// and put it to whatever is around the spread operator.
const arr = ['batman', 'robin', 'joker', 'riddler', 'enigma'];

const arr2 = [...arr];
// see spread operator literally spreaded all the elements of array into the new one.

const arkham = [...arr.slice(2, 5), `bane`, `ra's al ghul`];
console.log(arkham);

// spread with objects.
const myObj = {
    name: "Kunal",
    age: 25,
    hi: function () {
        return `Hola! from ${this.name}`;
    },
    greet: () => {
        // arrow function syntax.

        console.log("this => ", this);
        // this here referes to the global Node runtime scope
        // and not to the object - myObj.
        // solution -> use below given syntax for functions inside objects.


        // it will return undefined
        return "Hi, my name is " + this.name;
    },
    bye() {
        // syntax for function inside a object.
        // use this instead of arraw function or traditional function syntax.
        console.log("this => ", this);
        return `${this.name} says bye!`;
    }
};

const newObj = {
    ...myObj,
    work: "software engineer",
};

console.log(newObj);

console.log(newObj.hi());

let greeting = newObj.greet();
console.log(greeting);


let msg = newObj.bye();
console.log(msg);
