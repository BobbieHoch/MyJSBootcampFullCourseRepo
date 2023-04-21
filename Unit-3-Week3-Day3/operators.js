let populationOfDetroit = 650000;

let populationOfDubai = 650000;

if(populationOfDetroit >= populationOfDubai){
    //console.log("The if statement was true");
}

let numberThree = 3;
let stringNumberThree = "3";

if(numberThree == stringNumberThree){
    //console.log("They are equal");
}

//must be the same type, and have the same value
//numberThree is a number, stringNumberThree is a string
//They are NOT the same type, so this is false
if(numberThree === stringNumberThree){
    //console.log('They are still equal?');
}

let someBoolean = true;
let someOtherBoolean = 1;

//For booleans, you can think of 0 as false, and 1 as true
if(someBoolean == someOtherBoolean){
    console.log('Eureka, theyre equal!');
}

if(someBoolean === someOtherBoolean){
    console.log('Theyre still equal?');
}