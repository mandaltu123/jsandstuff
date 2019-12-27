
//ES5 way
function isFullAge() {
   // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function (cur) {
        console.log((2019 - cur) >= 18);
    });
}
isFullAge(1990, 1991, 1992, 2016);

//ES6
function isFullAge6(...years) {
    console.log(years);
    years.forEach(cur => console.log((2019 - cur) >= 18))
}

isFullAge6(1990, 1991, 1992, 2016);