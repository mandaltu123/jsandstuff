/**
 * Different types of contorl statements
 */

var firstName = "John"
var maritalStatus = "single"

if (maritalStatus == "married") {
    console.log("Need double bed in the hotel")
} else {
    console.log("single bed will be fine")
}

// example of while loop
var i = 0
while (i < 10) {
    console.log(i)
    i++
}

// example of for loop
console.log("**********************For loop exampple*****************")
for (n = 0; n < 10; n++) {
    console.log(n)
}
// == vs ===
// === is for strict equality. both value and type needs to be queal
if (77 == '77') {
    console.log("77 == '77' is ture")
} else {
    console.log("77 == '77' is false")
}

if (77 === '77') {
    console.log("77 === '77' is true")
} else {
    console.log("77 === '77' is false because left side is number and right side is", typeof '77')
}

// Ternary operations 
age = 20
age >= 18 ? console.log("can drink beer") : console.log("you are a minor, go and drink juice")

_whichDrink = age >= 18 ? 'beer' : 'orange juice'
console.log("you are " + age + " years old so you get to drink " + _whichDrink)


/**
 * We will be checking switch statement 
 */
var job = "teacher"

switch (job) {
    case "teacher":
        console.log("teaches kids how to code")
        break
    case "dirver":
        console.log("drives uber in lisbon")
        break
    case "designer":
        console.log("designs fancy dress")
        break
    default:
        console.log("John does something else")
}

var firstName = "John"
var age = 20
// switch true, or while true need to be very careful about the loop exit case
switch(true) {
    case age > 30:
        console.log("Yeah probably need to be serious about health")
        break
    case age > 25:
        console.log("Yeah probably be serious about career")
        break
    case age === 20:
        console.log("very confusing time")
        break
    default:
        console.log("whatever man")
}
/**
 * Truthy and Falsey valuese and equality check
 */

 var height;
 var height = 23
 if (height || height === 0) {
     console.log("variable is defined")
 } else {
     console.log("variable is not defined")
 }

 // equality operator
 if (height == '23') {
     console.log("the == operator does a type correction0")
 }
 
// break and continue
var myarray = ["one", "two", "three", 4, "five"]

// exampele of continue
for (var i = 0; i < myarray.length; i++) {
    if (typeof myarray[i] !== 'string') continue
    console.log(myarray[i])
}
console.log('----------------------------')
// example of break
for (var i = 0; i < myarray.length; i++) {
    if (typeof myarray[i] !== 'string') break
    console.log(myarray[i])
}

// reverse a string
var name = "james bond"

function reverse(input) {
    var temp = input.split("")
    var reversed = ''
    console.log(temp)
    for (var i = temp.length -1 ; i >= 0; i--) {
        reversed = reversed + temp[i]
    }
    return reversed
}

var test = reverse(name)
console.log(name + ' is reversed as ' + test)