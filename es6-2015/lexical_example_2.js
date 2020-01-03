/**
 * Another example
 */

function Person(name) {
    this.name = name;
}

//ES5 way
Person.prototype.myFriends = function (friends) {
    // var self = this;
    var arr = friends.map(function (el) {
        // return self.name + ' is friends with ' + el;
        return this.name + ' is friends with ' + el;
    }.bind(this)); // if we dont bind() with this keyword here, we will have to use the self what I have commented above
    console.log(arr);
};

var friends = ['dejong', 'busques', 'alenea', 'rakitic', 'vidal'];
new Person('Griezman').myFriends(friends);

// ES6 version

Person.prototype.myFriends = function (friends) {

    const arr = friends.map(
        (el) => {
            return `${this.name} is friends with ${el}`;
        });
    console.log(arr);
};
new Person('Griezman').myFriends(friends);