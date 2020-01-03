/**
 * Closures examples. Closures are one of the most important concepts in javascript.
 *
 * How closure works: An inner function has always access to the variables and parameters
 * of its outer function, even after the outer function has returned.
 */

function retirement(retirementAge) {
    return function(yearOfBirth) {
        const a = ' years until retirement'
        let age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

let retirementAgeIndia = retirement(60);

// we can also call it like this
let retirementAgeGermany = retirement(65);
let retirementAgeUS = retirement(66);
let retirementAgeIceland = retirement(67);

retirementAgeIndia(1984);
retirementAgeGermany(1984);
retirementAgeUS(1984);
retirementAgeIceland(1984);