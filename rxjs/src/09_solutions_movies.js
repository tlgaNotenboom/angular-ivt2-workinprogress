/*
Solutions to the movies exercises.
*/

const {movies} = require('./data');
const {from} = require('rxjs');
const {take, filter, flatMap, distinct} = require('rxjs/operators');

// EXERCISE 1
// create an observable from the movies and 
// subscribe console.log to it, but only print 3
console.log('EXERCISE 1');

from(movies).pipe(
    take(3)
)
.subscribe(console.log);

// EXERCISE 2
// create an observable from the movies and
// make a subscriber get 5 movies which title
// start with 'El'
console.log('EXERCISE 2');

from(movies).pipe(
    filter(movie => movie.title.startsWith('El')),
    take(5)
)
.subscribe(console.log);

// EXERCISE 3
// create an observable from the movies and 
// make a subscriber which gets all genres present
// in the movies dataset
console.log('EXERCISE 3');

from(movies).pipe(
    flatMap(movie => movie.genres),
    distinct()
)
.subscribe(console.log);

// EXERCISE 4
// create an observable from the movies and
// make a subscriber which gets all actors that
// played in a movie together with 'Sophie Marceau'
console.log('EXERCISE 4');

from(movies).pipe(
    filter(movie => movie.cast.includes('Sophie Marceau')),
    flatMap(movie => movie.cast),
    distinct(),
    filter(name => name !== 'Sophie Marceau')
)
.subscribe(console.log);