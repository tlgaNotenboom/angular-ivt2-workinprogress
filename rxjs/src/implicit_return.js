/*
Normal functions and anonymous functions in javascript need an explicit
'return' in order to return a value. 

Lambda or fat arrow functions can return a value implicitly. The difference
is shown below.

This is important to remember when chaining promises. That is, when using 
'then()' on a promise.
*/

// normal function that returns 1
function normal() {
    return 1;
}

// anonymous function that returns 1
let anonymous = function() {
    return 1;
}

// lambda the explicitly returns 1
let explicit = () => {return 1;};

// lambda that implicitly returns 1
let implicit = () => 1;



/*
CORRECT: explicit return
*/

// create a simple promise
let promiseA = new Promise((resolve, reject) => {
    setTimeout(resolve(1), 500);
});

promiseA
    // use '{ ... }' as body, needs a 'return'
    .then((result) => {return result*2})
    .then((result) => {
        console.log(result);
    });



/*
CORRECT: implicit return
*/

// create a simple promise
let promiseB = new Promise((resolve, reject) => {
    setTimeout(resolve(1), 500);
})

promiseB
    // no brackets here, implicitly returns 'result*2'
    .then((result) => result*2)
    .then((result) => {
        console.log(result);
    });



/*
INCORRECT: no return
*/

// create a simple promise
let promiseC = new Promise((resolve, reject) => {
    setTimeout(resolve(1), 500);
})

promiseC
    // using '{ ... }', but no return statement!
    .then((result) => {result*2})
    .then((result) => {
        console.log(result); // logs 'undefined'!
    });