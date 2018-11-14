// 
// Map - Reduce met mee promise: https://medium.freecodecamp.org/reduce-f47a7da511a9
//
// 1) npm init
// 2) npm --save install @types/es6-promises
// 3) tsc --init (als tsconfig.json niet bestaat)
// 4) transpile: tsc -p .
// 5) execute: node start

// Functie, return Promise (promise API)
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

    public hasRole(rolename: UserRole) : Promise<boolean>{
        let promise = new Promise<boolean>( (resolve, reject) => {
            setTimeout( () => {
                let retval = this.roles
                    .map( role => (role === rolename ) )
                    .reduce( (a,b) => (a || b) )
                resolve(retval);
            }, Math.random() * 5000);
        });
        return promise;
    };
};

// Create 2 user
const users: User[] = [];

users.push( new User(
    'Hendrik Haverkamp',
    'hh@server.com',
    [UserRole.Admin, UserRole.Basic, UserRole.SuperUser]
    )
);

// users.push( new User(
//     'Diederich Kroeske',
//     'dkroeske@gmail.com',
//     [UserRole.Viewer]
//     )
// );

// Check role for single user: simple
users[0].hasRole(UserRole.SuperUser).then(
    (val: boolean) => console.log('Has role UserRole.SuperUser: ' + val),
    (error: Error) => console.log('oeps')
);

// Check if both users have .Basic roles: chaining promises (achter elkaar, sequentieel)
let a: boolean; 
users[0].hasRole(UserRole.Basic)
    .then((hasRole: boolean) => { 
        a = hasRole; 
        return users[1].hasRole(UserRole.Basic);
    })
    .then((hasRole: boolean) => { 
        let b = hasRole; 
        if( a === true && b === true ) {
            console.log("Chain: Both have .Basic roles!");
        }
    });

// Ook kan: (parallel en onafhankelijk)

// Array van calls ...
const calls = [ 
    users[0].hasRole(UserRole.Basic), 
    users[1].hasRole(UserRole.Basic) 
];

Promise.all( calls )
    .then( hasRoles => {
        
        // Kan zo, maar grootte van array is fixed op 2
        if( hasRoles[0] === true && hasRoles[1] === true ) {
            console.log("Promise.All: Both have .Basic roles!");
        }   

        //In een loop? Onafhankelijk grootte array
        let isAllBasic = true;
        isAllBasic = hasRoles.every( hasRole => {
            return hasRole;
        });
        if( isAllBasic ) {
            console.log("Promise.All met een LOOP: Both have .Basic roles!");
        }

        // Nog beter op deze manier? Onafhankelijk grootte array
        if( hasRoles.reduce( (a,b) => a || b ) )  {
            console.log("Promise.All met Reduce: Both have .Basic roles!");
        }   
    });

    






