// 
// Met een callback
//
// 1) npm init
// 2) npm --save install @types/es6-promises
// 3) tsc --init (als tsconfig.json niet bestaat)
// 4) transpile: tsc -p .
// 5) execute: node start

//
enum UserRole {
	Basic,
	Viewer,
	Admin,
	SuperUser,
}

export class User {

    constructor(
        private name: string, 
        private email: string, 
        private roles: UserRole[])
    {
    }

    public hasRole(rolename: UserRole, callback: any) {
        setTimeout( () => {
            let retval = this.roles
                .map( role => (role === rolename ) )
                .reduce( (a,b) => (a || b) )
            callback(retval);
        }, Math.random() * 5000);
    }

};

// Create 2 user
const users: User[] = [];

users.push( new User(
    'Hendrik Haverkamp',
    'hh@server.com',
    [UserRole.Admin, UserRole.Basic, UserRole.SuperUser]
    )
);

users.push( new User(
    'Diederich Kroeske',
    'dkroeske@gmail.com',
    [UserRole.Viewer, UserRole.Basic]
    )
);

// Check role for single user: simple
// users[1].hasRole(UserRole.SuperUser, (hasRole: boolean) => {
//     console.log('Has role UserRole.SuperUser: ' + hasRole);
// });

// Check if both users have .Basic roles: callback in callback

// Not ok (zelfs een compiler issue)
// let a: boolean = false;
// let b: boolean = false;
// users[0].hasRole(UserRole.Basic, (hasRole: boolean) => {
//     this.a = hasRole;
// });

// users[1].hasRole(UserRole.Basic, (hasRole: boolean) => {
//     this.b = hasRole;
// });

// if( a === true && b === true ) {
//     console.log("Both have .Basic roles!");
// }

// Ok maar is cb in cb wat kan leiden tot pyramid of doom
users[0].hasRole(UserRole.Basic, (hasRole: boolean) => {
    let a = hasRole;
    users[1].hasRole(UserRole.Basic, (hasRole: boolean) => {
        let b = hasRole;
        if( a === true && b === true ) {
            console.log("Both have .Basic roles!");
        }
    })
})


