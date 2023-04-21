let numArray = [2, 8, 16, 256, 4];

let numArray2 = [9, 4, 1, 100, 46];

let numArray3 = [9, 17, 5, 3, 101];

//Check if all the numbers in the array are even
let isEven = numArray.every((x) => x % 2 === 0);
console.log(isEven);
//check if all the numbers in the array are odd
let isOdd = numArray.every((x) => x % 2 !== 0);
console.log