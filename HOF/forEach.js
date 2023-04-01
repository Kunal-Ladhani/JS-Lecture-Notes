// forEach,map,filter,reduce -- arrays



var sweets =["laddu","kova","gulabJamun","barfi"]

// for(var i=0;i<sweets.length;i++){
//   console.log(sweets[i])
// }
//forEach will return undefined
var out = sweets.forEach(function(sweets,i){
  return (i)
})

console.log(out)

//map will return an array
var out = sweets.map(function(sweets,i){
  return (sweets)
})

console.log(out)

var box=[]
sweets.forEach(function(sweets,i){
   box.push(sweets)
})


// var myFunction = function(sweets,i){
//   console.log(sweets)
//   console.log(i)
// }