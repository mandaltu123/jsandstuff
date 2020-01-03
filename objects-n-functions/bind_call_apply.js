/**
 *Example of bind, call and apply
 */

let john = {
    name: 'john',
    age: 25,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' ladies and gentlemen ! I\'m ' + this.name + ' a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! what\'s up. I\'m ' + this.name + ' a ' + this.job + ' and I\'m ' + this.age + ' years old.' + 'Have a nice ' + timeOfDay);
        }
    }
};

john.presentation('formal', 'morning');

let emily = {
    name: 'emily',
    age: 30,
    job: 'designer'
};

console.log('----------------- call() example -------------');
john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.bind(emily, ['friendly', 'afternoon']);
let johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('afternoon');
johnFriendly('afternoon');
console.log('-------------------apply() example--------------');
johnFriendly.apply('morning');
johnFriendly.apply('night');