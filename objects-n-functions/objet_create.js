/**
 * This is another way of creating objects
 */


 var personProto = {
     calculateAge: function() {
         console.log(2019 - this.yearOfBirth)
     }
 };

 // Now create 2 objects
 var john = Object.create(personProto);
 john.firstName = 'John';
 john.yearofbirth = 1985;
 john.job = 'teacher';
 // create another object
 var timothy = Object.create(personProto);
 timothy.firstName = 'timothy';
 timothy.yearOfBirth = 1987;
 timothy.job = 'chello player';
