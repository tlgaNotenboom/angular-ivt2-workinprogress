"use strict";
// 
// Map - Reduce met mee promise: https://medium.freecodecamp.org/reduce-f47a7da511a9
//
// 1) npm init
// 2) npm --save install @types/es6-promises
// 3) tsc --init (als tsconfig.json niet bestaat)
// 4) transpile: tsc -p .
// 5) execute: node start
Object.defineProperty(exports, "__esModule", { value: true });
// Functie, return Promise (promise API)
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Basic"] = 0] = "Basic";
    UserRole[UserRole["Viewer"] = 1] = "Viewer";
    UserRole[UserRole["Admin"] = 2] = "Admin";
    UserRole[UserRole["SuperUser"] = 3] = "SuperUser";
})(UserRole || (UserRole = {}));
class User {
    constructor(name, email, roles) {
        this.name = name;
        this.email = email;
        this.roles = roles;
    }
    hasRole(rolename) {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let retval = this.roles
                    .map(role => (role === rolename))
                    .reduce((a, b) => (a || b));
                resolve(retval);
            }, Math.random() * 5000);
        });
        return promise;
    }
    ;
}
exports.User = User;
;
// Create 2 user
const users = [];
users.push(new User('Hendrik Haverkamp', 'hh@server.com', [UserRole.Admin, UserRole.Basic, UserRole.SuperUser]));
// users.push( new User(
//     'Diederich Kroeske',
//     'dkroeske@gmail.com',
//     [UserRole.Viewer]
//     )
// );
// Check role for single user: simple
users[0].hasRole(UserRole.SuperUser).then((val) => console.log('Has role UserRole.SuperUser: ' + val), (error) => console.log('oeps'));
// Check if both users have .Basic roles: chaining promises (achter elkaar, sequentieel)
let a;
users[0].hasRole(UserRole.Basic)
    .then((hasRole) => {
    a = hasRole;
    return users[1].hasRole(UserRole.Basic);
})
    .then((hasRole) => {
    let b = hasRole;
    if (a === true && b === true) {
        console.log("Chain: Both have .Basic roles!");
    }
});
// Ook kan: (parallel en onafhankelijk)
// Array van calls ...
const calls = [
    users[0].hasRole(UserRole.Basic),
    users[1].hasRole(UserRole.Basic)
];
Promise.all(calls)
    .then(hasRoles => {
    // Kan zo, maar grootte van array is fixed op 2
    if (hasRoles[0] === true && hasRoles[1] === true) {
        console.log("Promise.All: Both have .Basic roles!");
    }
    //In een loop? Onafhankelijk grootte array
    let isAllBasic = true;
    isAllBasic = hasRoles.every(hasRole => {
        return hasRole;
    });
    if (isAllBasic) {
        console.log("Promise.All met een LOOP: Both have .Basic roles!");
    }
    // Nog beter op deze manier? Onafhankelijk grootte array
    if (hasRoles.reduce((a, b) => a || b)) {
        console.log("Promise.All met Reduce: Both have .Basic roles!");
    }
});
