
var arr = [7, 2, 7, 7, 3, 4, 2];

// 7 -> 3
// 2 -> 2
// 3 -> 1
// 4 -> 1


var obj = {};
for(var i=0; i<arr.length; i++)
{
  var number = arr[i];

  if(obj[number]==undefined)
  {
    obj[number] = 1;
  }
  else
  {
    obj[number] = obj[number] + 1;
  }
}

for(var key in obj)
{
  console.log(key," : ",obj[key]);
}