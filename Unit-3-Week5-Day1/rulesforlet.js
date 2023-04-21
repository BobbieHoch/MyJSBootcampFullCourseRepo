// var a = 5;
// var a = 3;

// let b = 5;

// //Line 7 ist verboten
// //let b = 3;

// //changing a inside the block changes a everywhere
// var a = 5;
// console.log(a); // 5
// {
//     var a = 3;
//     console.log(a); // 3
// }
// console.log(a); // 3

//when you redeclare a variable in a different block, it's value doesn't affect the outside
let a = 5;
console.log(a); // 5
{
    let a = 3;
    console.log(a); // 3
}
console.log(a); // 5