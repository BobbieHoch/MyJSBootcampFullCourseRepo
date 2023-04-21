const list = document.querySelector("#list");
const form = document.querySelector("#todoForm");

let database = [
    { isComplete: true, task: "Walk Dog", date: "11/13/22"},
    { isComplete: false, task: "See Movie", date: "11/13/22"},
    { isComplete: false, task: "Rake leaves", date: ""},
    { isComplete: true, task: "Fix hole in shed", date: ""},
    { isComplete: false, task: "Go to the beach", date: ""}
];

displayTodoItems();

list.addEventListener("click", e => {
    console.log(e.target); // <li class="item completed">Walk your dog</li>
    console.log(e.currentTarget); // <ul class="list"></ul>
    e.target.classList.toggle("completed")
});

form.addEventListener('submit', addTodoItem);

function displayTodoItems(){
    //Setting the inner html blank like this clears out all the li elements
    list.innerHTML = "";
    for(let item of database){
        addNewItem(item);
    }
}

function addNewItem(item){
    let elem = document.createElement("li");

    elem.innerText = `${item.task} (${item.date})`;

    if(item.isComplete){
        elem.classList.add("completed");
    }

    list.appendChild(elem);
}

function addTodoItem(event){
    //This will stop the form from refreshing the page
    //on submit which is its default behavior
    event.preventDefault();

    let data = new FormData(form);

    //This will find the input with the name task
    //in my form and grab whatever the person typed
    let task = data.get('task');

    let newTask = {
        isComplete: false,
        task: task,
        date: "11/3/2022"
    };

    database.push(newTask);

    displayTodoItems();
}
