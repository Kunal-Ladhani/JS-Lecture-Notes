// STRING and ARRAY

var str = "kilvish";
var arr = ['k','i','l','v','i','s','h'];
// both are different

console.log(str);
console.log(arr);

str[0] = "M";
console.log(str);
// string is immutable, cant be changed once declared

var arr1=[];
for(let i=0; i<str.length; i++)
  arr1.push(str[i]);
console.log(arr1); //array of characters can be changed

arr1[0]="m";

var str1="";
for(let i=0; i<str.length; i++)
  str1+=arr1[i];

console.log(str1);  
// we need a extra array to do the change in string
console.log(arr1.pop());  
//pop() removes the last element

// index is 0 to arr.length-1 for bith string and array
// random accessing is available for both by [index] operator

var str2 = "";
for(let i=0; i<str.length; i++) 
{
  if(str[i] == 'k')
    str2 += 'm';
  else
    str2 += str[i];    
}
console.log(str2);

const array = new Array(1,2,3,4,5);
array[0] = 22;
console.log(array);
console.log(Array.isArray(array));
console.log(Array.isArray(arr1));
console.log(Array.isArray(array instanceof Array));
console.log(Array.isArray(arr instanceof Array));