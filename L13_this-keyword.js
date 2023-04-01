var arr = [7,1,2,3,1,1,4,7,2];
// find all unqiue elements in an array
// print frequency of elements in an array

var obj = {};

for(let i=0; i<arr.length; i++) {
    var number = arr[i];
    if(obj[number] == undefined)
        obj[number] = 1;
    else
        obj[number] += 1;
}

for(var i in obj) {
    //if(obj[i] == 1)
        console.log(i+':'+obj[i]);
}

var person = {
    firstName : "Kunal",
    lastName : "Ladhani"
};

person.name = function() {
    return this.firstName + ' ' + this.lastName;
};

console.log(person.name());