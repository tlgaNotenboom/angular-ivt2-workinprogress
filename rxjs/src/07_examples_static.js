/*
Some examples of observables. 

These examples make observables from static data and show
how you can transform them using operators.
*/

const {Observable, range, from} = require('rxjs');
const {filter, map, delay, tap, count, take, distinct} = require('rxjs/operators');


// EXAMPLE 1
// our own observable
let mine$ = Observable.create(function(observer) {
    // this sends the next piece of data through the observable
    observer.next('hello');
    observer.next('world!');
});

// nothing happens until we subscribe!
mine$.subscribe(console.log);


// EXAMPLE 2
// an observable from a range of numbers
let range$ = range(1, 20)
    // add on operators to transform the data
	.pipe(
        // filter odd numbers
        filter(x => x % 2 === 1), 
        // multiply by 2
        map(x => 2*x),
        // and take the first three values
        take(3)
    );
    
// nothing happens until we subscribe!
range$.subscribe(console.log);
    

// EXAMPLE 3
// an observable from an array
let array = ['this', 'is', 'an', 'array'];
let array$ = from(array);

// the pieces of data come through delayed
array$.pipe(
    delay(500)
)
.subscribe(console.log);


// EXAMPLE 4
// an observable can aggregate data
let aggr$ = Observable.create(function(observer) {
    // send in the texts
    observer.next('Here');
    observer.next('is');
    observer.next('my');
    observer.next('message');

    // need to call complete to tell when we're done
    observer.complete();
});

aggr$.pipe(
    // tap to look at the data inside the pipe
    tap(x => console.log('before count: ' + x)),
    // count the number of values (needs to know when
    // the observable is done!)
    count()
)
.subscribe(x => console.log('after count: ' + x));


// EXAMPLE 5
// an observable can only emit distinct values
let distinct$ = from([1, 1, 2, 2, 3, 3]);

distinct$.pipe(
    distinct()
)
.subscribe(console.log);