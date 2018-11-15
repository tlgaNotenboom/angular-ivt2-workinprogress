/*
After the callback came the promise. This avoids a
pyramid of doom. 

A promise is an object that promises to resolve (return) a
value in the future. If that fails it rejects. 

A chain of promises can be made, only executing the
next link in the chain when the previous succeeded.
*/

// use fake data for users
const {generate_users} = require('./data');

// make a promise that generates all users
let chained_promise = new Promise((resolve, reject) => {
    // make the promise work asynchronously
    setTimeout(() => {
        let users = generate_users();
        resolve(users);
    }, 0);
});

// chain on the other filter steps
// beware that each function in a 'then' should 
// return something!
// no indendation when chaining promises
chained_promise
    .then((users) => 
        users.filter((user) => user.country === 'Netherlands')
    )
    .then((users) => 
        users.filter((user) => user.jobTitle.includes('Manager'))
    )
    .then((users) => 
        users.map((user) => user.firstName + ' ' + user.lastName)
    )
    .then((names) => 
        names.filter((name) => name.length > 16)
    )
    .then((names) => {
        console.log(names);
    })
    .catch(console.log);
