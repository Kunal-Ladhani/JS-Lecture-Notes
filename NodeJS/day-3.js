function getPerson(_myName, _age, _hobby) {
    return `${_myName} ${_age} ${_hobby}`;
    // local variables
    // function level scope.
}

let summarizedUser = function (_myName, _age, _hobby) {
    return `${_myName} ${_age} ${_hobby}`;
}

console.log(getPerson(myName, age, hobby));
console.log(summarizedUser(myName, age, hobby));

// use let and const -> ES6 Syntax (better)
// this keyword will refer to whoever called that function.
// if that is the class then it will refer to that classes object
// if its a function that this will refer to that function

// see => https://www.youtube.com/watch?v=Pv9flm-80vM&t=3s

const personDetails = (_myName, _age, _hobby) => {
    return `${_myName} ${_age} ${_hobby}`;
};

console.log(personDetails(myName, age, hobby));

// normal arrow function synatax for ES6
const add = (a, b) => {
    return a + b;
}

console.log(add(1, 2));

// for one return statment you can remove the return and parantheres
const adder = (a, b) => a + b;

console.log(adder(3, 2));

// for one param you can remove the parantheses
const addTwo = a => a + 2;
console.log(addTwo(2));

// for no params you need to have a empty pair or braces
const addRandom = () => 1 + 9;
console.log(addRandom());