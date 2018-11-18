/*
When subscribing an observer to an observable we can pass
three functions: next, error and complete. Next is what 
we've been using so far. The error function is called 
when an exception is thrown. Complete is called when the
observable completes
*/

const {Observable, of} = require('rxjs');
const {retry, catchError} = require('rxjs/operators');


// A basic example with an observable that completes and
// another that throws an error. 
console.log('Example 1');

let complete$ = Observable.create(function(observer) {
    observer.next('hello');
    observer.complete();
});

let error$ = Observable.create(function(observer) {
    observer.next('hello');
    throw Error('something went wrong');
});

complete$.subscribe({
    next: (value) => console.log('next ' + value),
    error: (value) => console.log('error ' + value),
    complete: (value) => console.log('complete ' + value)
});

error$.subscribe({
    next: (value) => console.log('next ' + value),
    error: (value) => console.log('error ' + value),
    complete: (value) => console.log('complete ' + value)
});


// Errors can also be used in a pipe attached to an observable
console.log('Example 2');

let first = true;
Observable.create((observer) => {
    if(first) {
        first = false;
        throw Error('called first time')
    } else {
        observer.next('hello');
    }
})
.pipe(
    // retry(3),
    // catchError(err => {
    //     console.log('got error: ' + err);
    //     return of('error');
    // })
)
.subscribe({
    next: console.log,
    error: console.log,
});