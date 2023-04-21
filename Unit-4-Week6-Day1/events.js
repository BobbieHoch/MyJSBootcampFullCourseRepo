let clickButton = document.querySelector("#clickMe");
//target element

clickButton.addEventListener('click', buttonClicked)
//attach event to action,be ready  to  run this function
//function
function buttonClicked() {
    let betterInBlue = document.getElementById("betterInBlue");

    betterInBlue.classList.add("betterInBlue");
}
//Function call is not set to an action, scroll click hover