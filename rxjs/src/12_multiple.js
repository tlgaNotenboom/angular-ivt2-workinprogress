/*
Some examples on how to combine multiple observables.
*/

const {Observable, forkJoin, combineLatest, interval} = require('rxjs');
const {make_number_observable} = require('./data');

// forkJoin waits for multiple observables to finish, then
// sends on all values at once
let quick$ = Observable.create((observer) => {
    setTimeout(() => {
        observer.next('quick');
        observer.complete(); // important to complete!
    }, 500);
});

let slow$ = Observable.create((observer) => {
    setTimeout(() => {
        observer.next('slow');
        observer.complete(); // important to complete!
    }, 2500);
});

forkJoin(
    quick$,
    slow$
)
.subscribe(console.log);

// combineLatest combines the latest values of multiple 
// observables every time one emits a new value.
let left$ = interval(500);
let right$ = interval(1000);

combineLatest(
    left$,
    right$
)
.subscribe(console.log)