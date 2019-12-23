/**
 * In javascript, other than primitve datatypes everything else are Objecets.
 * This is an example of creating objects using constructor
 */

 var john = {
     name: "john",
     yearofbirth: 1990,
     job: 'teacher'
 };

 // Person function constructor
 var Person = function(name, yearofbirth, job) {
     this.name = name;
     this.yearofbirth = yearofbirth;
     this.job = job;
 };
 Person.prototype.calculateAge = 
    function() {
        return (2019 - this.yearofbirth);
    }
// instantiate a new tuhin object
 var tuhin = new Person("tuhin", 1900, "ss");
 var age = tuhin.calculateAge();
 console.log("calculate tuhin's age = " + age);
 console.log(tuhin);

// ES2015 class
class Animal {
    constructor(name, foodHabbit, color, yearofbirth) {
        this.name = name;
        this.foodHabbit = foodHabbit;
        this.color = color;
        this.yearofbirth = yearofbirth;
        this.calculateAge = function() {
            this.age  = 2019 - yearofbirth;
        };
    }
}

// instantiate 3 animals 
 var dogmatix = new Animal("dogmatix", "bones", "black & white", 2015);
 var puss = new Animal("puss", "milk and fish", "orange and grey", 2016);
 var milo = new Animal("milo", "chicken", "brown", 2010);
 // call calculateage method to set the age 
 dogmatix.calculateAge();
 puss.calculateAge();
 milo.calculateAge();
 // log in console to see whether they are correctly set or not
 console.log(dogmatix);
 console.log(puss);
 console.log(milo);
