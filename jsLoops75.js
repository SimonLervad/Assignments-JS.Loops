'use strict';

/*
 * n: what do we play, 2:coins, 6:dice, ...
 */
const roll = function(n) {
    return Math.floor(Math.random() * n + 1);
}

/*
 * n: how many times
 * a: what do we play, 2:coins, 6:dice, ...
 */
const play_n_times = function(n, a) {
    let res;
    let tally = [];

    let i = 0;
    while (i <= a) {        // dim and init array
        tally[i] = 0;
        i += 1;
    }

    let then = new Date();
    i = 0;
    while (i < n) {         // play n times
        res = roll(a);
        tally[res] += 1;
        i += 1;
    }
    let now = new Date();
    console.log(`Time: ${now - then} ms`);
    return tally;           // return results
}

/*
 * print results array on log
 */
const print_tally = function(arr) {
    for (let i = 1; i < arr.length; i += 1) {
        console.log(`${i}'s: ${arr[i]}`);
    }
    console.log('---------------------------');
}