const first = () => {
    console.log('I am in first');
    second();
    console.log('second has finished execution')
};

const second = () => {
    console.log("in second function");
    setTimeout(() => {
        console.log("async timeout function");
    }, 3000);
};
// start execution
first();