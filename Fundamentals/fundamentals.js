let exampleArray = [1, 3, 5, 7, 9];

let exampleArray2 = [7, 18, 200, 15, 21, 10];

//loop through an array without using "let... of"
//parentheses will be dropped it any time from anywhere
//first variable sets an index counter
//second = to loop through all the elements in the array
//(array)can be filled by an []array or the name of another array
function loopThroughArray(array) {
    for (let i = 0; i < array.length; i++) {
        //i can be any variable
        //i is index of the array requires bracket notation
        console.log(array[i]);
        console.log(array[j])
    }
}

//loop through an array using let loop through objects
//num is now the index holding variable
function loopThroughArrayWithOf(array) {
    for (let num of exampleArray) {
        console.log(num);        
    }
}

//NESTED 'FOR LOOPS'
function nestedForLoop(array, array2) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            console.log(i);
            console.log(j);
        }
    }
}
nestedForLoop(exampleArray, exampleArray2);

//GET SUM OF ELEMENTS IN AN ARRAY
function sumOfElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

//GET AVERAGE OF ELMENTS IN AN ARRAY WITH A FOR LOOP

function getAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    let average = sum / array.length;

    return average;
}
//GET LARGEST NUMBER IN AN ARRAY

function getLargestNumber(array){
    
    let currentLargestNumber = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > currentLargestNumber) {
            currentLargestNumber = array[i];
        }
    }
    return currentLargestNumber;
}


