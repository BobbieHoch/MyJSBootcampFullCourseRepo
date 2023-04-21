//A function expression is where you take a variable and set it to a function

//Uncomment this and see what happens. You'll get an error
//It will say cannot access sayHello before initialization
// console.log(sayHello("JimBob"));

let sayHello = function sayHello(name) { return "Hello " + name + "!" }

console.log(sayHello("George"));


//function expressions don't have to have names
//they can be **anonymous** functions

let functionExpress = function () { return "Look ma, no name!" }

console.log(functionExpress());