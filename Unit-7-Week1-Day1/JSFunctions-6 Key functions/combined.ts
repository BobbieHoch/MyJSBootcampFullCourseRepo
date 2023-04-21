import { studentArray } from "./data";

//These ones require multiple functions, or an extra step


//number of students above the age of 21
function combinedMethod(students) {
    const above21 = students.filter(student => student.age > 21);
    const numAbove21 = above21.length;

//average age of student with a scholarship
const scholarshipStudents = students.filter(student => student.hasScholarship);
const sum = scholarshipStudents.reduce((total, student) => total + student.age, 0);
const avgAge = sum / scholarshipStudents.length;

return { numAbove21, avgAge };
}

