import { Student } from "./student";
import { Teacher, TeacherLevel } from "./teacher";
import { School, GenericSchool } from "./school";
import { IPerson } from "./iperson";

// let's put a student and a teacher in a school

let std = new Student();
let tch = new Teacher();

// set some values for the student
std.firstName = "John";
std.lastName = "Doe";
std.birthDate = new Date(1999, 4, 7);
std.studentNumber = 1234567;
std.startDate = new Date(2016, 8, 1);
std.graduationDate = new Date(2020, 6, 1);

// set some values for the teacher
tch.startDate = new Date(2015, 3, 1);
tch.level = TeacherLevel.Beginner; // note: this is how to set an enum

// create a school
let school = new School();

school.people.push(std);
school.people.push(tch);

school.people.forEach(person => console.log(person))

// same for a generic school
let genschool = new GenericSchool<IPerson>();
// let genschool = new GenericSchool<Student>(); // error when trying to 'push' a teacher! javascript does not care...

genschool.people.push(std);
genschool.people.push(tch);

genschool.people.forEach(person => console.log(person))
