// ES5

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        var self = this; // we are storing this here in self variable, because inside addEnentListerns
        // this becomes different
        document.querySelector('.green')
            .addEventListener('click', function () {
                var str = 'This is box number ' + self.position + ' and it is ' + self.color;
                alert(str);
            });
    }
};
// box5.clickMe();

// Now let's write the same with ES6 and arrow function
// If we carefully compare box5 and box6 methods we will see that the arrow function actually let us use the same
// this object which comes from the outer scope of the current function.

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () { // at this point, if we make it an arrow function, then due to the lexical nature of this
        // keyword, it will not refer to current object rather it will refer to parent object which in this case will
        // be Window object ob the browser as we are calling this javascript from index.html and
        // inside addEventListner's arrow function, this will become undefined. So we need to be careful while using arrow functions with this.
        document.querySelector('.green')
            .addEventListener('click',
                () => {
                    const str = 'This is box number ' + this.position + ' and it is ' + this.color;
                    alert(str);
                });
    }
};
box6.clickMe();

