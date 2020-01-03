/**
 * Objects and methods
 */

var james = {
    id: 100,
    firstName: "James",
    lastName: "Bond",
    birthYear: 1980,
    job: "spy at MI6",
    currentLocation: "unknown",
    last4: ['Spectre', 'Skyfall', 'Quantum of Solace'],
    calcAge: function () {
        this.age = 2019 - this.birthYear
    }
}

console.log(james.firstName + "'s age is " + james.calcAge())
console.log(james)


// Some more 

var john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

var mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}


john.calcBMI()
mark.calcBMI()
console.log(john)
console.log(mark)

// find who has the maximum bmi
var higherBmi;
if (john.calcBMI() > mark.calcBMI()) {
    higherBmi = 'John'
} else if (john.calcBMI() < mark.calcBMI()) {
    higherBmi = 'Mark'
} else {
    higherBmi = 'is not conclusive'
}
console.log('who has higher bmi ? ' + higherBmi)
