const form = document.getElementById("mainForm");
const resultDiv = document.getElementById("result");

//This is how I know when they submit the form
form.addEventListener("submit", submitForm);

function submitForm(event) {
    //Normally forms reset the page. I don't want it to do that-need to prevent that
    //
    event.preventDefault();

    //I need to grab what the person typed
    //Form Data is a built in class
    const data = new FormData(form);

    let name = data.get("name");
    let quest = data.get("quest");
    //How would I get the quest?

    //Let's add stuff to the DOM that didn't exist previously
//insert in p in the air
    let nameElement = document.createElement("p");

    nameElement.innerText = `Your name is ${name}!`;

    //Can you do something similar with the quest?
    //Can you maybe make it colorful? Or bigger?
    resultDiv.appendChild(nameElement)
}//resultDiv was targeted in line2

resultDiv.append(("<p> Hello There!</p>"))
