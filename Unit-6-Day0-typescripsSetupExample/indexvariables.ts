// types of variables
// string, number, boolean, null, undefined, symbol, bigInt

// let fullName = "Robert Hochstadt";

let fullName: string = "Robert Hochstadt";

let cat: boolean = true;

let temperature: number = 80;
//SPLIT
fullName.split("");

console.log('Hello there I made another change!');

console.log("I don't need to really keep running how to stop that");

//TRANSPILATION

function calculateSum(a: number, b: number): number {
    return a + b;
}

calculateSum(2, 3);

function printName(personsName: string):string{
    //void means can't return anything
    return personsName;
}