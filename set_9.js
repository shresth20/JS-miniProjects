// Qs1. Create a new input and button element on the page using JavaScript only. Set text of button to "Click me'

let btn = document.createElement("button");
let inp = document.createElement("input");
let body = document.querySelector("body");

body.append(btn);
body.append(inp);

btn.innerText = "Click me";


// Qs2. Add following attributes to the element :
// -Change placeholder value of input to "username"
document.querySelector("input").placeholder = "username";
// or
inp = setAttribute("placeholder", "username")

// -Change the id of button to "btn"
document.getElementById("button").id = "btn";
// or
btn = setAttribute("id", "btn")


// Qs3. Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.

let chgBtn = document.querySelector("#btn");
chgBtn.style.backgroundColor = "blue";
chgBtn.style.color = "white";


// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined. Change its color to purple.

let h1 = document.createElement("h1");
body.prepend(h1);
h1.innerText = "DOM Practice";
h1.style.textDecoration = "underline";
h1.style.color = "purple";


// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice", where Delta is bold.

let pg = document.createElement("p");
pg.innerHTML = "<b>javascript</b> practicing...";
body.append(pg);
