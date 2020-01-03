// HTML :- is the noun in web development
// CSS :- adjective in web development 
// JS:- is the verb 
// js versiongs ES5-> ES6(2015) -> ES7(2016) -> ES8 (2017)

var firstName = "John"
let lastName = "Smith"
const gender = "MALE"
console.log(firstName + " " + lastName + " " + gender)

// datatypes 
// There are 5 types of datatypes in javascript
// Number       : Floating point numbers for decimals and integers
// String       : char sequence   
// Boolean      : Logical datatype 
// Undefined    : Datatype of a variable that does not have a value yet 
// Null         : also means non existent
// This to remeber is that, javascript has dynamic typing, which means we do not have to explicitely specify 
// datatypes of the declared variables. JS automatically does that for us 

a = 15
b = 20.5 
console.log(a, b)
console.log("type of a is ", typeof a)
console.log("type of b is ", typeof b)

address1 = "Bangalore"
address2 = "India"
console.log("type of address1 is ", typeof address1) 
console.log("type of address2 is ", typeof address2)

y = true
if (y) {
    console.log("Y is true so I am here and type of y is ", typeof y)
}

var n
console.log("The type of n is ", typeof n)
_years = 3
console.log(_years)
/**
 * Variable mutation in javascript, age is a number and it automatically converts to a string 
 */
var name = "JOhn"
var age = 30

console.log(name + ' ' + age)

var job, isMarried
job = "Teacher"
isMarried = true

console.log(job + ' ' + isMarried)
// var drinkingHabit = prompt("What is your drink ?")
// console.log(drinkingHabit)