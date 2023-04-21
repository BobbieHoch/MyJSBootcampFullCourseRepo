let numbers = [1, 2, 4, 7, 3, 5 , 6];

function isOdd(number){
    return number % 2 != 0;
}

function isEven(number){
    return number % 2 == 0;
}

//high order function
function filter(numbers, fn){
    let result = [];

    for(const number of numbers){
        if(fn(number) === true){
            result.push(number);
        }
    }

    console.log(result);
    return result;
}

//passing a function into another function?!
//filter(numbers, isEven);
//filter(numbers, isOdd);

filter(numbers, (x) => x > 5 );

//console.log(numbers.find((x) => x > 3));