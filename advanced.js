// var is old type of variables
var test
test = "tuhin"
console.log(test)
// use let if its truely variable
let x
x = "testing"
console.log(x)
x = "changing the variable value"
console.log(x)
// use const if the variable is a constant
const URL = "http://localhost:8080"
console.log(URL)
// try to assign new value to this variable 
// URL = "https://127.0.0.1:8080" TypeError: Assignment to constant variable.


// old style of writing functions 
function myFunc() {
	console.log("Hello I am in myFunction")
}

myFunc()
// arrow functions 
const newFunction = () => {
	console.log("I am in new function")
}

newFunction()

const add = (x, y) => {
	console.log("I am in new function")
	return x + y
}

var sum = add(10, 20)
console.log(sum) 
