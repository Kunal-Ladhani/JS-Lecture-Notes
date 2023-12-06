// Input taking

var x = "18";
var y = Number(x);
console.log(y,typeof(y));


// Unary + operator can be used to convert string to number
var z = +(x);
console.log(z,typeof(z));
// similar to Number()
// both + and Number() will only work for single numbers, not on array of numbers

// trim() method
// Removes the leading and trailing white space and line terminator characters from a string.
var str = "   mas   ai   "
console.log(str.trim());
// trim() is a inbuild function
// trim() is used to trim off trailing(before string) and leading(after string) white spaces, not inbetween spaces

// split()

// convert any string to array, divides using the separator, if separator not present retruns the whole string as array

// input will always be a string in JS

var s = "the quick brown fox, jumps over the lazy dog";
console.log(s.split(" "));

// Split a string into substrings using the specified separator and return them as an array.

// @param separator — A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.

// @param limit — A value used to limit the number of elements returned in the array.

// map() function
// will go to each element in array and convert it to Number(array[i]), and return all as a array of numbers.
// to be used when you want to convert array of stings to array of numbers
// can't be used for single number

var m = ["1","2","3","4","5"];
var res = m.map(Number);
console.log(res);

