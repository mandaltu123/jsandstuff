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
    console.log(firstName + " retires in " + timeRemainingToRetire + " years")
}
yearsUntillRetirement(1986, "Ps")