// Arrays are fundamental concept in any language
var names = ["john", "paul", "johnes"]
console.log(names)
var years = new Array(198, 1990, 2000)
console.log(years)
console.log(typeof years)
console.log(names[0] + years[0])
console.log("length of names array is " + names.length)

// now let's modify the element in an array
years[0] = 1969
console.log(years)
// mutate the array 
names[2] = 'Johnsy'
names[names.length] = 'Ola'
console.log("modified names array is now = " + names)



// Different data types
var john = ['John', 'Smiht', 1990, 'teacher', false]
john.push('blue') // adds a new element at the end of the array
console.log(john)
john.unshift('Mr') // adds a new element at the begining of the array 
console.log(john)
var removed = john.pop()
console.log("the popped element is " + removed + "\n and the array is now = " + john)
console.log(john.indexOf(false))
john[john.length] = "bassist"
var isBassPlayer = john.indexOf('bassist') >= 0 ? "yeah, the greatest bass player in the planet" : " we are talking about some other john may be"
console.log(isBassPlayer)