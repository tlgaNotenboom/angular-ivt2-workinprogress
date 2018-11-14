/*
 * A student class that extends the base class
 */

// import the person base class
import {Person} from './person';


// the concrete class 'extends' the abstract base class: inheritance!
export class Student extends Person {
    studentNumber: number;
    startDate: Date;
    graduationDate: Date;
}
