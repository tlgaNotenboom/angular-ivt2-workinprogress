/*
Functional programming defines a recipe that is applied to
each element in an array.

For example: 'filter' can decide whether to keep an element in
the array or not. You pass it a function that looks at the element
and returns 'true' to keep it or 'false' to remove it.

filtered = array.filter((element) => element.name === 'Keep');

Another example: 'map' transforms each element into a new element. 
We could get an array with double the value of the original.

double = array.map((element) => element * 2);
*/

// use fake data for users
const {generate_users} = require('./data');

// generate an array of users
let users = generate_users();

// specify the recipe of filtering and mapping
let names = users
    .filter((user) => user.country === 'Netherlands')
    .filter((user) => user.jobTitle.includes('Manager'))
    .map((user) => user.firstName + ' ' + user.lastName)
    .filter((name) => name.length > 16);

// after all filtering has happened we log the result
console.log(names);
