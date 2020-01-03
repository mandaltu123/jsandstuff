/**
 *
 * @param a
 * @param b
 * @param c
 * @param d
 * @returns {*}
 */
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

// old ES5 style
var sum = addFourAges(18, 19, 20, 21);
console.log(sum)
var ages = [18, 19, 20, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);


// in ES6 we can do following
const max3 = addFourAges(...ages);
console.log(max3);
console.log('==================')
Array.from(ages).forEach( cur => console.log(cur));