//Assignment JS.Loops.71
'use strict';
/* Downey: thinkjava, ex 71 */
const loop = function(n) {
    let i = n;
    while (i > 1) {			
        console.log(i);
        if (i % 2 == 0) {
            i = i / 2;    //hvis 2 går op i tallet halvere den tallet.
        } else {
            i = i + 1;		//hvis to ikke går op i tallet, ligger den en til så to går op i tallet. Hvis tallet har decimaler, vil den loope uendeligt med +1
        }					// den vil derefter loop og køre det en gang til
    }
}
loop(10);