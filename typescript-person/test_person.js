"use strict";
exports.__esModule = true;
var person_1 = require("./person");
// create two people
var jane = new person_1.Person();
var john = new person_1.Person();
// change properties of one
john.firstName = 'John';
john.lastName = 'Smith';
john.birthDate = new Date(1960, 2, 23);
// check the output of default values for jane
console.log(jane);
console.log(jane.getName());
console.log(jane.getAge());
// check the changed properties of john
console.log(john);
console.log(john.getName());
console.log(john.getAge());
