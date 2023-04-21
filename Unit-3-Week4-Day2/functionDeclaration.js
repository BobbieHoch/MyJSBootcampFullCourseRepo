//There are different ways to write functions
//At the end of the day, functions take input, perform some logic, then output something
//and have a name that can be called either the function name or the variable name


console.log(SayHello("Jimmy"));

//Example of function declaration
//The function has t have a name.
//This function's name is SayHello
function SayHello(name) {
    return 'Hello ' + name + "!";
}

let newName = SayHello("George");

//In order to use this function, you'll have to 'call it'
console.log(SayHello("Bob"));

//**Advanced Uncomment this and try it out
console.log(SayHello);

//**Advanced Uncomment this and try it out
//console.log(SayHello);

//notice how I put SayHello(Jimmy) at the top?
//There were no errors.