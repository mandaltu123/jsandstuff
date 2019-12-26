/**
 * Functions are also objects, so we can do same things with functions as we can do with objects.
 *
 * A function is an instance of a object
 * A function behaves like any other object
 * We can store functions in variables
 * We can pass a function as an argument to another function
 * We can return a function from a function
 *
 */

// function accepting functions as an argument

let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    let arrResult = [];
    for (let i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

// write those callback functions
function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

// passing the function name is passing its reference. This is why it is called call back
// function, because here we are not actually calling the function calculateAge, it will be called
// later by arrayCalc() function
let ages = arrayCalc(years, calculateAge);
let fullAges = arrayCalc(ages, isFullAge);
let rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);