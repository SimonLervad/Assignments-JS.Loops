'use strict';
let f = function(x) {
    if (x <= 1)
        return 1;
    else
        return x * f(x - 1);
}
let x = Number(prompt('indtast tal her'));
console.log(f(x));