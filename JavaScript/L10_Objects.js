// NOTE: Object in JS have properties (field) and methods (functions).

// Create an object
var user = {
	name: "Ram",
	age: 34,
	hobbies: ["coding", "reading"],
	print: function () {
		console.log("Hello " + this.name);
		console.log("Age is " + this.age);
		console.log("Hobbies are " + this.hobbies.join());
	}
}

user.print();
// OUTPUT
// Hello ram
// age is 34
// my hobbies are coding,running


// NOTE: we can access property of object by using dot operator or [] notation.

// IMPORTANT: dot operator

user.friendList = ["Jignesh", "Shyam", "Shambhu"];
user.token = 103010251;
// see, we can add properties to user on-the-fly!

console.log(user);
// in java we would have to change the class defination.

// IMPORTANT: bracket notation

user['password'] = 'passWord@123';

// if propertyName is not known at time of coding
// it is decided at compilation.
const propertyName = 'location';
user[propertyName] = 'Bengaluru';

// using prperty names that are not valid identifiers - have space etc.

const property = 'Fav City';
user[property] = 'bhopal';

console.log(user);


// NOTE: Iterating through properties in an object.

// for in loop
for (let key in user) {
	console.log(key + '->' + user[key]);
}

// to get all properties of an object as a array
const keys = Object.keys(user);
console.log(keys);

// in keyword will tell if an object has that property or not.
// to check existance of that prop or method in the object.
if ('location' in user) {
	console.log(user.location);
}