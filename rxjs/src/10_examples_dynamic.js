/*
Some examples of observables.

These observables use dynamic data. Random numbers are 
generated at random intervals.

Comment out all except one example to easily see the output.
*/

const {make_number_observable} = require('./data');
const {throttleTime, debounceTime, bufferTime, tap, map} = require('rxjs/operators');

let numbers$ = make_number_observable();


// EXAMPLE 1
// this observable generates random numbers at random intervals
// numbers$.subscribe(x => console.log(x));


// EXAMPLE 2
// throttleTime only lets through a value every 5000ms
// numbers$.pipe(
//     throttleTime(5000)
// )
// .subscribe(console.log);


// EXAMPLE 3
// debounceTime only lets through a value when more
// than 500ms have passed between two values
// numbers$.pipe(
//     debounceTime(500)
// )
// .subscribe(console.log);


// EXAMPLE 4
// bufferTime stores values until time has passed, then
// sends them on as array
// this computes the sum of values every 2500ms
// numbers$.pipe(
//     // tap(x => console.log('new value: ' + x)),
//     bufferTime(2500),
//     // tap(x => console.log('after buffer: ' + x)),
//     map(arr => arr.reduce((sum, elem) => sum + elem), 0)
// )
// .subscribe(console.log);
