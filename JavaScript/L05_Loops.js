console.log("__________________WHILE LOOP_____________________");

console.log("__________________DO-WHILE LOOP__________________");

console.log("__________________FOR LOOP_______________________");
var i = 99;
// use let so that the i value stays inside the loop

for (let i = 0; i < 5; i++) {
  console.log("Hello");
}

console.log(i);

console.log("__________________FOR-OF LOOP_______________________");
// of lets you loop over an iterable DS like array, string, map, nodeList etc. 

let names = ["kunal", "rohit", "chunni", "mamta"];
let str = "JavaScript";
for (let i of names) {
  console.log(i);
}
// here names can be any object over whose iterable properties we iterate

// here i will be assigned the value of next property in each itetation

// i can be declared with const, let, or var
// const and let will have scope inside the loop only
//  var will have scope outside the loop too
// use let if you have to change i inside the loop otherwise use const


console.log("__________________FOR-IN LOOP_______________________");

for (let j in str) {
  console.log('str[' + j + '] = ' + str[j]);
}

// here j will not assume the value of the next property
// j = key is returned in each iteration
// that key can be used to access the value
// do not use for..in to iterate over an array if index order is important

console.log("__________________FOR-EACH LOOP_______________________");

var students = ['Kunal', 'Rohit', 'Kapil', 'Sailesh'];

var list = ['x', 'y', 'z'];
students.forEach(function (name, idx, list) {
  console.log('---*---');
  console.log(idx + 'th name is = ' + name);
  console.log('list => ' + list);
  console.log('this => ' + this);
  console.log('---*---');
}, {});

