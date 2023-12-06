// NOTE: UTILITY FUNCTIONS
// they are inbuilt with all types eg - number, string.

var num;
console.log(isNaN(num));   // because it is NaN
console.log(isFinite(num));  //because it is not finite

num = 21;
console.log(num, typeof (num));
console.log(isNaN(num));   // because it is not NaN
console.log(isFinite(num));  //because it is finite

var str = num.toString();
console.log(str, typeof (str));

var n = Number(str);
console.log(n, typeof (n));

str = "kunal is a good boy";
console.log(str.split('kunal'));