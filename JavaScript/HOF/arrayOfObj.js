var mobiles=[
  {brand:"Samsung",model:"S7562"},
  {brand:"Apple",model:"iphone 13 pro"},
  {brand:"one plus",model:"7 pro"}
]


mobiles.forEach(function(elem){
  console.log(elem.model)
})

var out = mobiles.map(function(elem){
  return elem.model
})

console.log(out)