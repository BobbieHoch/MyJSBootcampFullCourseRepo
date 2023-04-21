//name is the input
function greetCustomer(name) {
    //operation-of function
    if (name === undefined) {
        console.log('I need a name dude.');
    }
    else {
        console.log(`Welcome to K-Mart ${name}!`)
    }
}
greetCustomer('Thelonius');

function areaOfRectangle(length, width) {
    return (length * width);
}

//length of 20, width of 5
let area = areaOfRectangle(20, 5);
console.log(area);

areaOfRectangle(2, 200);

//we are passing in the value Shirley
greetCustomer();

//call the function with parameters
greetCustomer("Daniel");

greetCustomer("Bilbo Baggins");