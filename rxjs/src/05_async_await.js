/*
After promises 'async' and 'await' were introduced to keep
the code looking synchronous, while it's executed
asynchronously.

An 'async' function is allowed to pause and wait for
the result of another function. 
It waits for the result of a function when 'await' is 
put in front of it.

Note that if you want to 'await' a function it should
return a promise.
*/

const {generate_users} = require('./data');

// generate users in a promise
function generateUsersPromise() {
    return new Promise((resolve, reject) => {
        // use setTimeout to make it asynchronous
        setTimeout(() => {
            resolve(generate_users());
        }, 0);
    });
}

// a function that filters on the netherlands
function filterNetherlands(users) {
    return new Promise((resolve, reject) => {
        // use setTimeout to make it asynchronous
        setTimeout(() => {
            resolve(users.filter((user) => 
                user.country === 'Netherlands'));
        }, 0);
    });
}

// a function that filters on job title
function filterManager(users) {
    return new Promise((resolve, reject) => {
        // use setTimeout to make it asynchronous
        setTimeout(() => {
            resolve(users.filter((user) => 
                user.jobTitle.includes('Manager')))
        }, 0);
    });
}

// a function that maps to a name
function mapNames(users) {
    return new Promise((resolve, reject) => {
        // use setTimeout to make it asynchronous
        setTimeout(() => {
            resolve(users.map((user) => 
                user.firstName + ' ' + user.lastName));
        }, 0);
    });
}

// a function that filters name length
function filterNameLength(names) {
    // use setTimeout to make it asynchronous
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(names.filter((name) => 
                name.length > 16));
        }, 0);
    });
}

// do the filtering work
async function async_work() {
    // this is executed asynchronously, but looks
    // synchronous!
    let users = await generateUsersPromise();
    let dutch = await filterNetherlands(users);
    let managers = await filterManager(dutch);
    let names = await mapNames(managers);
    let result = await filterNameLength(names);

    console.log(result);
}

async_work();