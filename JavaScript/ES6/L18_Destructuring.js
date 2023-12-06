// Destructuring

// objects

const person = {
    name: "Kunal",
    age: 25,
    greet: function () {
        return "Hi, my name is " + this.name;
    }
};

// suppose you always get the person object as a whole,
// from some 3rd party package - often happens in MERN
// and you want to print the name.

// method 1 - take full object as param
// and then just use its properties by dot(.) operator.
const printName = (personData) => {
    console.log(personData.name);
}

// printName(person);

// method 2 - use destructuring to take only the required fields

// the object's other properties are dropped.
// no need for them, we only take what we need from the object.
const namePrinter = ({ name, age }) => {
    console.log(`Hi my name is ${name} and age is ${age}.`);
}

namePrinter(person);

const { name, age } = person;
console.log(name);
console.log(age);
// in Objects the properties are pulled out by name
// so while destructuring, it must match the exact property name.


// Arrays can also be destructured.

const DCU = ["Batman", "Robin", "Joker", "Scarecrow", "Bane", "Riddler", "Enigma"];
const [hero, sidekick, villians] = DCU;
// in array the elements are pulled out by position, unlike in objects
// so while destructuring, need not match the property name.

console.log(`hero is ${hero}`);
console.log(`his sidekick is ${sidekick}`);
console.log(`and the villians are - ${villians}`);
// see it only takes out one value from the array.
// unlike the spread operator.