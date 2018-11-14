/**
 * Map-reduce example.
 */

import { from, Observable } from 'rxjs'
import { filter, tap, reduce, count, map } from 'rxjs/operators'

enum UserRole {
	Basic,
	Viewer,
	Admin,
	SuperUser,
}

export class User {
	name: String;
	email: String;
	roles: [UserRole];

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}

	public hasRole(rolename: UserRole): Observable<boolean> {
		return from(this.roles).pipe(
			// 1: log enum values: [0, 1, 2]
			// tap(val => console.log(val))
			// 2: map: enum => boolean
			map(val => val === rolename),
			// 3: log values: [false, true, false] 
			// tap(val => console.log(val))
			// 4: reduce: (boolean-a, boolean-b) => boolean-a || boolean-b
			reduce((a, b) => a || b)
			// 5: reduced: [false, true, false] => [true]
		)
	}
}

const user: User = new User({
	name: 'Hendrik Haverkamp',
	email: 'hh@server.com',
	roles: [UserRole.Admin, UserRole.Basic, UserRole.SuperUser]
});

//emit array as a sequence of values
// const arraySource = from([1, 2, 3, 4, 5]);
//output: 1,2,3,4,5
// const subscribe = arraySource.subscribe(val => console.log(val));

console.log('Has role UserRole.SuperUser:')
user.hasRole(UserRole.SuperUser)
	.subscribe(val => console.log('hasRole = ' + val));


console.log('Has role UserRole.Admin:')
user.hasRole(UserRole.Admin)
	.subscribe(val => console.log('hasRole = ' + val));

console.log('Has role UserRole.Viewer:')
user.hasRole(UserRole.Viewer)
	.subscribe(val => console.log('hasRole = ' + val));