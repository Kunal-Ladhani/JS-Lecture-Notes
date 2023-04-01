// Create an object
var user = { 
    name : "Ram",
    age :  34,
    hobbies : ["coding","reading"],
    print : function() {
            console.log("Hello "+this.name);
            console.log("Age is "+this.age);
            console.log("Hobbies are "+this.hobbies.join());
            }
}

user.print();
// OUTPUT
// Hello ram
// age is 34
// my hobbies are coding,running