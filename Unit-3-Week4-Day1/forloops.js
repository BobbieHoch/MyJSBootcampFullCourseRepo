// For Loop counting up to 9
for (let i = 0; i < 10; i++){
    console.log(`this has run ${i} times.`)
}
//for loop counting up to 4
for (let i = 0; i < 5; i++){
    console.log(`The value of i is: ${i}`);

}
//for loop counting down from 10
for (let i = 10; i > 0; i--){
    console.log(`The value of is i is: ${i}`);
}

//for loop counting up by 12
for (let i = 0; i <= 100; i += 12){
    console.log(`The value of i is: ${i}`);
}

let employees = ["Bob", "James", "Joe", "Marcus", "Amelia", "Kyle", "Sandra"];
//array and indexes starting at [0]
console.log(employees[4]);

//forOf loop

for (let employee of employees) {
    console.log(employee); 
}
//Goes through array starting a index 1 till the end, length -1 is last entry
for (let i = 0; i < employees.length - 1; i++){
    console.log(employees[i]);
}