/**
 * ES6 way of creating classes
 */
class Person {
    constructor(firstName, lastName, email, yearOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
    }

    calculateAge() {
        this.age = new Date().getFullYear() - this.yearOfBirth;
    }

    static greeting() {
        console.log("Hey there");
    }
}

const john = new Person('john', 'smith', 'js@js.com', 1990);
john.calculateAge();
console.log(john);
Person.greeting();