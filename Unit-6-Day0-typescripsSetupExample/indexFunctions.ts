// write a function to add two numbers together
     //parameter is assigned type and the output is also assigned a type
     //DEFAULT TYPE IS 'VOID' NO RETURN KEYWORD -NEVER GETS A RETURN
function calculateSum(a: number, b: number): number {
    return a + b;
}
calculateSum(2, 3);

let firstName = "jonathan";
        //parameter is assigned type and the output is also assigned a type
function printName(personName: string): string {
    //no return keyword will appear 
  return printName;
    console.log(printName);


}
let whatsYourName = printName("Jonathan");


//Cannot mix and match contents in an array
//must all be the same variable type in one array.
let nameArray = ["Robert", 58, true];

let nameArray2: number[] = [0, 5, , 10, 15, 0];
  //methods will work


let nameArray3: string[] = [];

let numberArray: string[] = ["t", "Fred", "Sam"]

//METHODS ARE THE SAME IN TYPESCRIPT
numberArray.push("Lucy");

let numberAtIndex = numberArray[1];