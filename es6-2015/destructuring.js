/**
 * This is an example of destructuring. Which is kind of opposite of constructing.
 * @type {(string|number)[]}
 */
// ES5 way

var john = ['John', 26];
var name = john[0];
var age = john[1];

// ES6 way
const [firstName, yearOfBirth] = ['john', 26];
console.log(`${firstName} is ${yearOfBirth} years old.`)
// This also works with objects
const test = {
    mail: "ts@gs.com",
    phone: 9878675656
};
const {mail, phone} = test;
console.log(mail, phone);

// let's have a look at little more realistic example

function calculateAge(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [currentSge, retirement] = calculateAge(1990);
console.log(currentSge, retirement);