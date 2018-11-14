import { IPerson } from "./iperson";

/*
 * A school contains many students and teachers
 */

export class School {
    // create an array of objects that behave as a person
    people: IPerson[] = [];
}


// alternatively we can make school generic over the type of people
export class GenericSchool<T> {
    people: T[] = [];
}