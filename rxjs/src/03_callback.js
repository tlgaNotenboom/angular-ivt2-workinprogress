/*
Now we look at the first asynchronous style of programming: callbacks.

When we call a function we give it a callback function that is executed 
with the result that would otherwise be returned.
*/

/*
// Example:
function f() {
    return 1;
}

let result = f();
result += 10;
console.log(result);

// Becomes:
function f(callback) {
    callback(1);
}

f((result) => {
    result += 10;
    console.log(result);
});
*/

const {generate_users_callback} = require('./data');


// this function filters only people from the netherlands
function filterNetherlands(user, callback) {
    // condition for keeping the user
    if(user.country === 'Netherlands') {
        // only call the callback if we keep the user
        callback(user);
    }
}

// filters users on their job title
function filterManager(user, callback) {
    if(user.jobTitle.includes('Manager')) {
        callback(user);
    }
}

// filters users on the length of their name
function filterNameLength(name, callback) {
    if(name.length > 16) {
        callback(name);
    }
}

// maps a user to their name
function mapName(user, callback) {
    // construct the name from the user
    let name = user.firstName + ' ' + user.lastName;
    // then call the callback function with the name
    callback(name);
}

// generate fake users by callback
// the callback function is called for each generated user
generate_users_callback((user) => {
    filterNetherlands(user, (user) => {
        filterManager(user, (user) => {
            mapName(user, (name) => {
                filterNameLength(name, (name) => {
                    // look how far we're indented here
                    // pyramid of doom!
                    console.log(name);
                })
            })
        })
    })
});
