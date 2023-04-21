//There is a built in Date Class in JS

//first off, instantiating a new date will get the current date AND time
console.log(new Date());

//we can customize the date
//we can supply 3 arguments to the Date constructor 
//the first argument is year, the second month, the third day
//months are 0 index so January is 0
//method overload
let employeeStartDate = new Date(2022, 0, 2);

console.log(employeeStartDate);

//Date has multiple constructors so we can create a date based on the info we have/need
//Supplying only year and month for example
let yearAndMonth = new Date(1984, 2);

console.log(yearAndMonth);

//Dates have methods like getFullYear
console.log(employeeStartDate.getFullYear());
//You can add and subtract dates

let newDate:Date = new Date();

newDate.setMonth(employeeStartDate.getMonth() + 3);

console.log(employeeStartDate);
console.log(newDate);
