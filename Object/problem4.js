// Find the sum of element whose occurence is 2

var arr = [3, 2, 7, 7, 3, 4, 2];


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



var sum = 0;
for(var key in obj)
{
  if(obj[key]==2)
  {
    sum = sum + Number(key)
  }
}

console.log(sum);