/**
 * Hoisting is a mechanism of javascript execution where variables and 
 * functions declarations are moved to the top of their scope before 
 * execution
 */

console.log("************* Ola *****************")

caculateAge(1984) // look at this. the function is called before it has been defined but still works

function caculateAge(year) {
    console.log(2016 - year)
}

// retirement(1990) TypeError: retirement is not a function
// this does not work because this is not a function declaration but it is function expression
// hoisting of functions only work with function declarations 

var retirement = function(year){
    console.log(65 - (2016 - year))
}

retirement(1990)

// hoisting with variables 
console.log(age) // undefined: because here javascript knows that it is just not defined yet
var age = 30
console.log(age)

function foo() {
    console.log(age)
    var age = 100
    console.log(age)
}

foo()
console.log(age)