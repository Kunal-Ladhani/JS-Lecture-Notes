
var nums = [1,4,6,7,8]

// calculate sum
// var sum = 0
// for(var i=0;i<nums.length;i++){
//   sum=sum+nums[i]
// }

//console.log(sum)


// forEach(function(el,i,arr))
// map(function(el,i,arr))
// filter(function(el,i,arr))
//reduce(function(sum,el,i,arr),initial_value)
var out = nums.reduce(function(sum,el,i){
  return sum+el*10
},10)

console.log(out)

// sum = 10 --> 10+1=11 , sum = 11
// sum = 11-> 11+4=15, sum=15
//sum=15-> 15+6=21 , sum =21
// sum =21 ->21+7 , sum =28
// sum = 28-> 28+8=36 , sum =36

// sum = 1 -> 1+4 = 5 , sum=5
// sum = 5 -> 5+6=11 , sum =11
//sum=11 -> 11+7=18 , sum =18
//sum=18 -> 18+8, sum= 26