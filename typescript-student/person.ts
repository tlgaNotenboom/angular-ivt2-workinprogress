/*
* A person abstract base class that implements the interface
*/

// import the person interface
import { IPerson } from './iperson';

// use 'export' to expose the class to the outside
// the abstract class 'implements' the interface
export abstract class Person implements IPerson {
    firstName: string;
    lastName: string;
    birthDate: Date;

    // default implementation of this method
    getAge(): number {
        // returns an approximate age for now...
        let now = new Date(); // creates object with current time 
        return now.getFullYear() - this.birthDate.getFullYear();
    }

    // default implementation
    getName(): string {
        // use 'this.' to reference members
        return this.lastName + ', ' + this.firstName;
    }
}