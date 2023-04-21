import { studentArray } from "./data";

//its fine to do console logs to confirm

//filter all students who are below 20

// let studentsUnder20 = studentArray.filter((student) => student.age < 20);
// // studentArray.filter((student) => student.age > 19);

// console.log(studentsUnder20);
let studentsUnder19 = studentArray.filter((student) => student.age < 19);

console.log(studentsUnder19);


//filter all students who have scholarships
let studentsWhoHaveScholarships = studentArray.filter((student) => student.hasScholarship)
console.log

//filter all students whose names begin with D
let namesStartingD = studentArray.filter((student) => student.name[0] === "D");
//filter all students who are 25 or above 
let studentsOver25 = studentArray.filter((student) => student.age >= 25);