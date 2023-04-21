//Object Oriented Programming
//Style of Programming, paradigm
//functional programming

 
//make up a TYPE
// these four properties with correct value whenever using this TYPE
interface Person {
    //
    name: string,
    age: number,
    quest: string,
    isEmployee:boolean
}
//USING TYPE AS A VARIABLE-INTERFACE CREATES ALL PROPERTIES AS REQUIREMENTS
let newPerson: Person = {
    name: "Nathan",
    age: 25,
    quest: "Seek the magic rings",
    isEmployee: false,
    // hasBeenToDisneyland: false ////////not allowed in this TYPE
    
}
//PASSING THE VARIABLE IN A FUNCTION
function sayHi(person: Person) {
    return sayHi(newPerson);
}


//COMPARED TO VANILLA JAVASCRIPT
// let car = {
//     make: "ford",
//     model: "Mustang"
// };//////CAN ALWAY ADD FOR FEATURES
// car.color = "blue";
// car.hsSurroundSound = false;
// }//
function sayHi(person: Person): void {
    console.log(`Hello there ${person.name}!`);
}

