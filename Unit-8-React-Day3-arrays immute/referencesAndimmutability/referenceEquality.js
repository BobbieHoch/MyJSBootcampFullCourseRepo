let colorbox = { color: 'red', width: 30 };

let colorbox2 = { color: 'red', width: 30 };

let colorbox3 = colorbox;
colorbox3.color = "blue";

//true or false?
console.log(colorbox === colorbox2);

//true or false?
console.log(colorbox === colorbox3);