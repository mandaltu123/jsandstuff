/**
 * Example of how inheritance works oin Javascript. We will check both ES5 and ES6 ways.
 *
 * @param name
 * @param yearOfBirth
 * @param job
 * @constructor
 */
//ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};
// add a function as prototype
Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};
// Now create the subclass here
var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicgames = olympicGames;
    this.medals = medals;
};
// Now create prototype chain here
Athlete5.prototype = Object.create(Person5.prototype);
var UsainBolt = new Athlete5('Usain Bolt', 1985, 'runner', 3, 10);
console.log(UsainBolt);
UsainBolt.calculateAge();

//ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.job = job;
        this.yearOfBirth = yearOfBirth;
    }

    calculateAge() {
        this.age = new Date().getFullYear() - this.yearOfBirth;
        console.log(this.age);
    }
}

class Swimmer extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicgames = olympicGames;
        this.medals = medals;
    }
}

const michale = new Swimmer('Michale Phelps', 1990, 'swimmer', 3, 10);
console.log(michale);
michale.calculateAge();