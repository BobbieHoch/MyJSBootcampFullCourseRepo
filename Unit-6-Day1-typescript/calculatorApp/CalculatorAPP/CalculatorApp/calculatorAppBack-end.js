let form = document.getElementById("leetForm");
let resultDiv = document.getElementById("Result");
let dropdown = document.getElementById("calculateOption");

leetForm.addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    let data = new FormData(form);

    let firstNumber = data.get('firstInput');
    let secondNumber = data.get('secondInput');
    let selection = dropdown.value;
    
    resultDiv.value = Calculate(firstNumber, secondNumber, selection);
}

// function Calculate(a, b, type) {
   
//     switch(type){
//         case "add":
//             return Number (a) +(b);
//         case "subtract":
//             return a - b;
//         case "multiply":
//             return a * b;
//         case "divide":
//             return a / b;
//         default:
//             return "Invalid calculation type!";
//     }
// }
// console.log(Calculate("dog", "cat", "add"));

function Calculat(a, b)  {
    return a + b;
}
