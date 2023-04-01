var x = 12;
var y = x.toString();
console.log(x,typeof(x));
console.log(x,typeof(x));    // string is immutable
console.log(y,typeof(y));    

console.log("___________________________________")

z = "21";
console.log(z,typeof(z));    // number is immutable
a = Number(z);            
console.log(z,typeof(z));    
console.log(a,typeof(a));    

console.log("___________________________________")

m = true;
console.log(m,typeof(m));    // boolean is immutable
n = (!m);            
console.log(m,typeof(m));    
console.log(n,typeof(n));    

console.log("___________________________________")

var p;
console.log(p,typeof(p));

console.log(p == null);
console.log(p == undefined);

console.log(p === null);
console.log(p === undefined);


console.log("___________________________________")

var q = null;
console.log(q,typeof(q));

String(q);
console.log(q == null);
console.log(q == undefined);

console.log(q === null);
console.log(q === undefined);


console.log("___________________________________")

var r = undefined;
console.log(r,typeof(r));

console.log(r == null);
console.log(r == undefined);

console.log(r === null);
console.log(r === undefined);
