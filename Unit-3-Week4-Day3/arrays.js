let nameArray = ["Bob", "Joe", "Sally"];

let numberArray = [13, 35, 124, 5432];

//each individual item in an array is call an element
//javascript is a 0 index language
let mixAndMatch = ["Bob", 82, true, "Sally"];

let objectArray = [
    { name: "Joe", age: 50 },
    { name: "Sally", age: 23 },
];

//The place of an element in an array is its index
//An element is one item in the Array
//The idex is its numbered spot
// console.log(nameArray[0]);

//Like strings, array have a length
console.log(nameArray.length);

console.log(nameArray[2].length);

// nameArray.unshift("George");

nameArray.push("George");
//pop, shift, splice

let doesJoeExist = nameArray.includes("Joe");
//does it exist
console.log(nameArray);
console.log(doesJoeExist);
let whereIsIt = nameArray.indexOf("Joe");
console.log(whereIsIt);

console.log(indexofMethuselah);

//METHODS--METHODS----METHODS

//There's also pop-removes the element at the end of the array
//             push-Adds the element to the end of the array
//             splice-Add the element to specific array
//             shift-Removes the element at the beginning of the Array
//             
//try them out to see what they do!