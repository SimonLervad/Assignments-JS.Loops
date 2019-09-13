'use strict';
const init = function() {
    document.getElementById('play').addEventListener('click', function() {
            var howMany = Number(prompt('How many plays?'));
            var what = Number(prompt('2 for coins, 6 for dice'));
            let arr = play_n_times(howMany, what);
            print_tally(arr);
        });
}
window.addEventListener('load', init);