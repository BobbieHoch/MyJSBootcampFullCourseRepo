//Object Oriented Programing
//OOP
//target an element on the page one object
let divTag = document.querySelector("#targetSpecificId");
console.log(divTag);

divTag.innerHTML = "The Metaverse is coming to get you";
//manipulate the objects
divTag.innerHTML = "The Metaverse is coming for you."
//first singular element - it finds singular object
let exampleClassTag = document.querySelectorAll(".exampleClass");
exampleClassTag[1].innerHTML = " Hidey Hoh!";
console.log(exampleClassTag[0]);
//if there are more that one  in that selector it is now an array you can target the index
//the order is in the order of the tree




//everything that fits criteria function
//manipulate their properties to your whims
//all element will now be an array
//Need to loop through this array to get 






document.getElementById("targetSpecific");
document.getElementsByClassName("exampleClass");

//by Tag
let header = document.querySelector("h1");

console.log(header);

//Unit 4 - Add Classes to group called classList
header.classList.add("highlighted");

// let elements = document.querySelectorAll("div, p");
//const el = document.querySlector("div.user-panel.main input []")

let liTag = document.querySelectorAll("li");

header.classList.add("highlighted");
// header.style.display = "none";

// forLoop added to array of elements
for (let tag of exampleClassTag) {
    tag.classList.add("highlighted");
    console.log(tag);
}


header.style.display = "block";
// header.classList.remove("highlighted");

let divTagIWantToFind = document.getElementById("tag");
//name only, don't need
let className = document.getElementsByClassName("classname");
