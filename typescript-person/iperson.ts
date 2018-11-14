/*
 * interface for a person
 */

// use 'export' to expose the interface to the outside
export interface IPerson {
    // names are of type 'string'
    firstName: string;
    lastName: string;

    // birthDate is a 'Date'
    birthDate: Date;

    // computes and returns the age
    // return type is a number
    getAge(): number;

    // returns a formatted string of the full name
    // return type is a string
    getName(): string;
}