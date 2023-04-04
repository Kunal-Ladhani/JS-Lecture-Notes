var nums = [1,2,3,4,5]
var box =[]
nums.forEach(function(el){
  box.push(el*10)
})
console.log(box)


var out = nums.map(function(el){
  return el*10
})

console.log(out)

