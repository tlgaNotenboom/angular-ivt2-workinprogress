"use strict";
exports.__esModule = true;
/*
 * A person instance that implements the interface
 */
// use 'export' to expose the class to the outside
// the person 'implements' the interface
var Person = /** @class */ (function () {
    function Person() {
        this.firstName = "Jane";
        this.lastName = "Doe";
        this.birthDate = new Date(1999, 4, 6);
    }
    /*
     * constructor runs when creating a new instance
     * it can also be used to declare members, us either this line or the three declarations above!
     */
    // constructor(public firstName: string, public lastName: string, public birthDate: Date) {}
    Person.prototype.getAge = function () {
        // returns an approximate age for now...
        var now = new Date(); // creates object with current time 
        return now.getFullYear() - this.birthDate.getFullYear();
    };
    Person.prototype.getName = function () {
        // use 'this.' to reference members
        return this.lastName + ', ' + this.firstName;
    };
    return Person;
}());
exports.Person = Person;
