//This stuff is not necessary, but if you want more advanced knowledge, here you go.

//REMINDER: if you want to call an anonymous function later on in your program
//you have to set them equal to a variable so you can use it later.
//If you run this program, this arrow function won't do anything and you can't call it later
let x = 11;
let y = 7;
    
((x, y) => console.log(x * y));

//THIS arrow function will run when the program hits this line
//This is the syntax to do so
//You wrap it in parenthesis and then put parentheses at the end
(() => console.log('This arrow function on Line 7 has just run.'))();

//You can do the same thing with regular anonymous functions
let multiplyTowNumbers = function (x, y) {
    console.log('The anonymous function on Line 11');
}();

//VERY ADVANCED
//Why in the world would we want an anonymous function anyway?
//There are many reasons, some of them I'm waiting until later in the course to talk about
//one reason is: Because if I'm just using the function once, why bother naming it?

const intervalId = setInterval(
    //This function has no name, and why should it, I'll never use it again
    function () {
        //use control c to break out of the program
        console.log('set Interval fires');

    }, 2000);