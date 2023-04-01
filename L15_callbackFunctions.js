// function statement
function javascript(){
  console.log("welcome to HOF")
}
javascript();

// function expression
var myFunction = function(){
  console.log("welcome to HOF")
}
myFunction();

function sum(a,b) {
   return (a+b);
}

var output = sum(2,3);
console.log(output);
// arguments - 2,3 are arguments
// parameters - a,b are parameters


function eatBreakfast(item,time,goAndBrush){
  goAndBrush()
  console.log("I am eating"+" "+item+" "+"as my breakfast"+" "+"at"+" "+time)
}

eatBreakfast("idly",9,goAndBrush)
// hof- passing function inside a function


function goAndBrush(){
  console.log("first brush your teeth")
}

order of execution -> 7 -> 2 -> 3 -> 11 -> 12 -> 4

function sum(a,b,resultDisplay){
  var out = a+b // out =2+3=5
  resultDisplay(out)
}

sum(2,3,resultDisplay)

function resultDisplay(result){
  console.log("your output is"+ " "+result)
}

// order of execution -> 6 -> 1 -> 2 out= 2+3=5 -> 3 -> 8 -> 9

function 