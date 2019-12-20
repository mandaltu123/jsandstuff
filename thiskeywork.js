/**
 * :-> In a normal case, this keyword points at the global object 
 * (the) window object in the browser.
 * :-> Method call: the this variable points to the object that is calling the method 
 * :-> the this keyword is not assigned a value until a function where it is defined actaully called
 */

 console.log(this)

 var Jason = {
     firstName: "Jason",
     lastName: "Bourne",
     email: "jbourne@gmail.com",
     yearOfBirth: 1984,
     calculateAge: function() {
         this.age = 2019 - this.yearOfBirth
         return this.age
     }
 }

 console.log(Jason.calculateAge())
 console.log(Jason)

 // Method borrowing. We did not write a new calculateAge method under mike, instead we just borrowed from Jason
 var Mike = {
     firstName: "Jason",
     lastName: "Bourne",
     email: "jbourne@gmail.com",
     yearOfBirth: 1980
 }

 Mike.calculateAge = Jason.calculateAge
 Mike.calculateAge()
 console.log(Mike)