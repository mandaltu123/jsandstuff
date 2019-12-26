/**
 * Immediately invoked function expressions
 */

function game() {
    let score = Math.random() * 10;
    console.log(score >= 5);
}
game();
// how to use IIFE
(function() {
    let score = Math.random() * 10;
    console.log(score >= 5);
})();
