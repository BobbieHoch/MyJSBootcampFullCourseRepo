const list = document.querySelector(".list");

list.addEventListener("click", e => {
    console.log(e.target); // <li class="item completed">Walk your dog</li>
    console.log(e.currentTarget); // <ul class="list"></ul>
    e.target.classList.toggle("completed")
})

//can you make a form to add a new 