import { Student } from "./student";
import { Teacher, TeacherLevel } from "./teacher";

// Let's test a student and a teacher object

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

console.log(std);
console.log(tch);