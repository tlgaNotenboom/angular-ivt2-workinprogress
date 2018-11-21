/*
Subjects are observables to which multiple observers
can subscribe. They can also have more complex 
behavior, like storing a history.
*/

const {BehaviorSubject, ReplaySubject} = require('rxjs');

// Behavior subject 
// let behavior$ = new BehaviorSubject('hello');

// behavior$.subscribe(v => console.log('observer A: ' + v));
// behavior$.subscribe(v => console.log('observer B: ' + v));

// behavior$.next('bye');



// Replay subject buffers values for new subscribers, in
// this case three
let replay$ = new ReplaySubject(3);

replay$.subscribe({
  next: (v) => console.log('observerA: ' + v)
});

replay$.next(1);
replay$.next(2);
replay$.next(3);
replay$.next(4);

replay$.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

replay$.next(5);