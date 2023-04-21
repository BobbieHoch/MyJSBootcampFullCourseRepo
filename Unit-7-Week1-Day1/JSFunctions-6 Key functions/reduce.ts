import { studentArray } from "./data";


// //the sum of the students ages
// let sumofStudentAges = studentArray.reduce((x, student) => x + student.age, 0);
// console.log(sumofStudentAges); 
    

//the average age of a student
let averageAge = studentArray.reduce((x, student) => x + student.age, 0) / studentArray.length;
console.log(averageAge);