
//Assignment JS.Loops.0
'use strict';
let f = function(x) {
    if (x <= 1)
        return 1;
    else
        return x * f(x - 1);
}
let x = Number(prompt('indtast tal her'));
console.log(f(x));

//Assignment JS.Loops.1
'use srict';
const fibo = function(n) {
	if (n === 0 || n === 1)
		return n;
	else
		return fibo(n-1)+fibo(n-2);
}
let n = Number(prompt('indtast tal her'));
console.log(fibo(n));

//Assignment JS.Loops.2.2 Functions
let n = Number(prompt('indtast tal her'));
let i = 2;
let isPrime = function(p) {
	if (n % i === 0) {
		return false;
	} else {
		return true;
	}
	i++;
}
console.log(isPrime());