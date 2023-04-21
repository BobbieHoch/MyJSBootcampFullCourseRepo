//arrow functions act just like regular functions
//the difference is they're more compact. They take up less space.
//arrow functions are also anonymous, meaning they don't have a name

//These are basic arrow functions
let addTwoNumbers = (a, b) => { return a + b }

//returns a + b, no need for the return keyword or curly brackets!
let addTwoNumberNoReturnNeeded = (a, b) => a + b

//You use them like normal functions, the only difference is appearance
console.log(addTwoNumbers(5, 2));

console.log(addTwoNumberNoReturnNeeded(10, 12));

//if your function has more than one line, you -will- need curly brackets
let getReadyForSchool = () => {
    console.log('Put on your shoes');
    console.log('Put on your coat');
    console.log('head out');
}

//heck, the parenthesis are not necessary
_ => console.log('No Parenteses');