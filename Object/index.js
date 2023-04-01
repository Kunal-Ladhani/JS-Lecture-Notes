
var str = "masai";


diary = {};

for(var i=0; i<str.length; i++)
{
  var char = str[i]

  if(diary[char] == undefined)
  {
    diary[char] = 1
  }
  else
  {
    diary[char] = diary[char] + 1
  }
  
}

for(var k in diary)
{
  console.log(k," ",diary[k]);
}