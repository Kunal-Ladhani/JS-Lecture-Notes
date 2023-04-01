// Inbuit Function

var num = 21;
console.log(num, typeof(num));
var str = num.toString();
console.log(str, typeof(str));

var n = Number(str);
console.log(n, typeof(n));

var arr = [1,2,3,4,5];
console.log(arr.indexOf(3));
arr.unshift(6);
console.log(arr);

str = "kunal is a good boy";
console.log(str.split('kunal'));