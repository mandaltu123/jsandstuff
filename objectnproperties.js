/**
 * Objects are the single most important feature of javascript
 * {} -> this is called object literal 
 */

var james = {
    id: 100,
    firstName: "James",
    lastName: "Bond", 
    dob: "13th April, 1953",
    job: "spy at MI6",
    currentLocation: "unknown",
    last4: ['Spectre', 'Skyfall', 'Quantum of Solace']
}

console.log(james.firstName + "\n" + typeof james)
// mutate object
james.job = 'unknown'
console.log(james)

// New object syntax
var Jane = new Object()
Jane.firstName = "Patrick"
Jane.lastName = "Jane"
Jane.birthYear = 1984
console.log(Jane)