/**
 * Example of functions 
 */

function calculateAge(birthYear) {
    return 2019 - birthYear;
}

myAge = calculateAge(1984)
console.log("my age is = ", myAge)

function yearsUntillRetirement(year, firstName) {
    var age = calculateAge(year)
    timeRemainingToRetire = 60 - age
    if (timeRemainingToRetire > 0) {
        console.log(firstName + " retires in " + timeRemainingToRetire + " years")
    } else {
        console.log(firstName + " is already retired")
    }
   
}
yearsUntillRetirement(1986, "Ps")
yearsUntillRetirement(1985, "PP")
yearsUntillRetirement(1980, "James")
yearsUntillRetirement(1960, "Bond")
yearsUntillRetirement(1950, "pa")
/**
 * Function statements and Expressins 
 */


// this is a function expression
 var whatDoUDo = function(job, firstName) {

    switch(job) {
        case 'teacher':
            return firstName + " teaches kids how to code"
        case 'designer':
            return firstName + " creates fancy clothes"
        case 'driver':
            return firstName + " drives a cab in lisbon"
        default:
            return firstName + " does something else"
    }
 }

console.log( whatDoUDo("teacher", "john"))
console.log( whatDoUDo("designer", "jane"))
console.log( whatDoUDo("driver", "Mark"))
console.log( whatDoUDo("retire", "Paul"))