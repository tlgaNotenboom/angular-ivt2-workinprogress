/*
 * A teacher class that extends the base class
 */

// import the person base class
import {Person} from './person';


// an enum defining different teacher levels
export enum TeacherLevel {
    Beginner,
    Experienced,
    Senior
}

// the concrete class 'extends' the abstract base class: inheritance!
export class Teacher extends Person {
    employeeNumber: number;
    startDate: Date;
    level: TeacherLevel;
}
