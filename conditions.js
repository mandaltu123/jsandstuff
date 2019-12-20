/**
 * Different types of contorl statements
 */

 var firstName = "John"
 var maritalStatus = "single"

 if (maritalStatus == "married") {
     console.log("Need double bed in the hotel")
 } else {
     console.log("single bed will be fine")
 }

 // example of while loop
 var i = 0
 while(i < 10) {
     console.log(i)
     i++
 }

 // example of for loop
 console.log("**********************For loop exampple*****************")
for (n = 0; n <10; n++) {
    console.log(n)
}
// == vs ===
// === is for strict equality. both value and type needs to be queal
if (77 == '77') {
    console.log("77 == '77' is ture")
} else {
    console.log("77 == '77' is false")
}

if (77 === '77') {
    console.log("77 === '77' is true")
} else {
    console.log("77 === '77' is false because left side is number and right side is", typeof '77')
}