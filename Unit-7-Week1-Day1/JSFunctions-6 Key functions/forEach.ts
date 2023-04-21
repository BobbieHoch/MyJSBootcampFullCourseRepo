import { studentArray } from "./data";

//These two are the same thing

for(let student of studentArray){
    console.log(student.name);
}
//CREATES NEW ARRAY OF THIS PROPERTY
studentArray.forEach((x) => console.log(x.name));