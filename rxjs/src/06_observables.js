/*
Finally we come to observables. The idea here is that we
can subscribe to an observable and get notified when new
data has arrived.

You define streams of data and can listen to them. The 
stream can also transform the data, for example filter or
map data.

Observables are lazy: they only work when someone is 
listening to them. You need to subscribe before anything
will happen in your code.
*/

const {from} = require('rxjs');
const {filter, map} = require('rxjs/operators');
const {generate_users} = require('./data');

// create the observable from all users
// each user will be a new piece of data
// the '$' denotes that it's an observable
let users = generate_users();
let users$ = from(users);

// to see all users we can subscribe with a logger
// only after subscribing will the observable start 
// streaming data
// users$.subscribe((user) => console.log(user));

// make a new observable from another by giving it
// instructions how to transform the data
// look at rxjs operators!
let filtered$ = users$.pipe(
    filter((user) => user.country === 'Netherlands'),
    filter((user) => user.jobTitle.includes('Manager')),
    map((user) => user.firstName + ' ' + user.lastName),
    filter((name) => name.length > 16)
);

// no code has run here! we need to subscribe to the
// observable to start the filtering and mapping process

filtered$.subscribe(console.log);