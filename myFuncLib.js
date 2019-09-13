
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

//Assignment JS.Loops.3
let r = Number(prompt('indtast roden her'));
let e = Number(prompt('indtast opførsel her'));
let pow = function(r, e) {
	if (e <= 1) {
		return r;
	} 
	return r * pow(r, e-1);
}
console.log(pow(r, e));