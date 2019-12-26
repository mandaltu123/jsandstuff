/**
 * Arrow function examples.
 * @type {number[]}
 */
const years = [1991, 1992, 1996, 1984];
// ES5
var ages5 = years.map(function(el){
    return 2019 - el;
});
console.log(ages5);
// This callback function can be written ion ES6 like this:

const ages6 = years.map( el => 2019 - el);
console.log(ages6);

let anotherAge6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}`);
console.log(anotherAge6);