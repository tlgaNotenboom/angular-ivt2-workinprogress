"use strict";
// 
// Met een callback
//
// 1) npm init
// 2) npm --save install @types/es6-promises
// 3) tsc --init (als tsconfig.json niet bestaat)
// 4) transpile: tsc -p .
// 5) execute: node start
Object.defineProperty(exports, "__esModule", { value: true });
//
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
    hasRole(rolename, callback) {
        setTimeout(() => {
            let retval = this.roles
                .map(role => (role === rolename))
                .reduce((a, b) => (a || b));
            callback(retval);
        }, Math.random() * 5000);
    }
}
exports.User = User;
;
// Create 2 user
const users = [];
users.push(new User('Hendrik Haverkamp', 'hh@server.com', [UserRole.Admin, UserRole.Basic, UserRole.SuperUser]));
users.push(new User('Diederich Kroeske', 'dkroeske@gmail.com', [UserRole.Viewer, UserRole.Basic]));
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
users[0].hasRole(UserRole.Basic, (hasRole) => {
    let a = hasRole;
    users[1].hasRole(UserRole.Basic, (hasRole) => {
        let b = hasRole;
        if (a === true && b === true) {
            console.log("Both have .Basic roles!");
        }
    });
});
