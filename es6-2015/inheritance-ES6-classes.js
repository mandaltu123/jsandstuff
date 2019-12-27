
//ES6
class Person6 {
    constructor(name, email, yearOfBirth) {
        this.name = name;
        this.email = email;
        this.yearOfBirth = yearOfBirth;
    }
    calculateAge() {
        this.age = new Date().getFullYear() - this.yearOfBirth;
        console.log(this.age);
    }
}