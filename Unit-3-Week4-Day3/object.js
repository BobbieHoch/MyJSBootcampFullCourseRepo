//Const is recommended to declare object

// const car = {
//     make: "Ford",
//     model: "Ranger",
//     year: 2022,
//     color: "blue",
//     owner: "Myself",
//     miliage: 42000,

// }

// //access properties with dot or bracket (will require quotes)
// console.log(car.color);

// console.log(car["year"]);

// //We can add properties
// car.owner = "Bob";

// console.log(car.owner);

function Person(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
}

//Instantiation
const newPerson = new Person("Bob", 25, 195);

console.log(newPerson.age);

const newPerson2 = new Person("George", 33, 265);

console.log(newPerson2.age);
