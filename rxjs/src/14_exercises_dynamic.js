/*
Some exercises on the dynamic side of observables
*/

const {zip, combineLatest, interval} = require('rxjs');
const {make_number_observable} = require('./data');

// EXERCISE 1
// Listen to the dynamic numbers observable from data.js
// and find the largest number that is emitted each 
// 5 seconds.

// EXERCISE 2
// Make an observable that emits [0,0], [1,1], [2,2], ...
// from the two observables below.
// Look up zip in the RxJS documentation!
let left$ = interval(500);
let right$ = interval(1000);


