import { IPerson } from './iperson';

/*
 * A person instance that implements the interface
 */

// use 'export' to expose the class to the outside
// the person 'implements' the interface
export class Person implements IPerson {
    // firstName: string = "Jane";
    // lastName: string = "Doe";
    // birthDate: Date = new Date(1999,4,6);

    /*
     * constructor runs when creating a new instance
     * it can also be used to declare members, us either this line or the three declarations above!
     */
    constructor(
        public firstName: string, 
        public lastName: string, 
        public birthDate: Date) {}

    getAge(): number {
        // returns an approximate age for now...
        let now = new Date(); // creates object with current time 
        return now.getFullYear() - this.birthDate.getFullYear();
    }

    getName(): string {
        // use 'this.' to reference members
        return this.lastName + ', ' + this.firstName;
    }
}