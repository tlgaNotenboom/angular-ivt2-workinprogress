/*
Some exercises on the dynamic side of observables
*/

const {zip, interval} = require('rxjs');
const {bufferTime, map} = require('rxjs/operators');
const {make_number_observable} = require('./data');

// EXERCISE 1
// Listen to the dynamic numbers observable from data.js
// and find the largest number that is emitted each 
// 5 seconds.
// let numbers$ = make_number_observable();

// numbers$.pipe(
//     // tap(x => console.log('new value: ' + x)),
//     bufferTime(5000),
//     // tap(x => console.log('after buffer: ' + x)),
//     // map(arr => arr.reduce((sum, elem) => sum + elem), 0)
//     map(arr => arr.reduce((max, elem) => elem > max ? elem : max), 0)
// )
// .subscribe(console.log);

// EXERCISE 2
// Make an observable that emits [0,0], [1,1], [2,2], ...
// from the two observables below.
// Look up zip in the RxJS documentation!
let left$ = interval(500);
let right$ = interval(1000);

zip(
    left$,
    right$
)
.subscribe(console.log);
