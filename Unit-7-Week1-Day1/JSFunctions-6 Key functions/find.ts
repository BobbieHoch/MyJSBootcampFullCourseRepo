import { studentArray } from "./data";

//find a student named Sharonda
let sharonda = studentArray.find((x) => x.name === "Sharonda");
console.log(sharonda);

//find the first student age 21
let blackJack = studentArray.find((x) => x.age === 21);
console.log(blackJack);
//only first one
let Chai = studentArray.find((x) => x.age === 18);
console.log(Chai);
//find the first student without a scholarship
let noScholarship = studentArray.find((x) => x.hasScholarship === false);
console.log(noScholarship);