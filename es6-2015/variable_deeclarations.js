const name = 'tuhin';// constant, that means we wont be able to change the value
let age = 10;
console.log(name)
console.log(age)
age += 1;
console.log(age);

// let, const are block scoped not function scoped.

function driverLicense(passedTest) {
    let firstName;
    const yearOfBirth = 1992;

    if (passedTest) {
        firstName = 'jason bourne';
        let x = 100;
        var y = 200;
    }
    console.log(firstName + ' and ' + yearOfBirth);
    console.log(y);
    console.log(x); // This will throw error ReferenceError: x is not defined.
    // The reason it throws error is that let and consts are block scoped.
    // since we are trying to access outside of if block, hence it is not defined
    // however good old vars work like a charm as they used to be function scoped.
}

driverLicense(true);
