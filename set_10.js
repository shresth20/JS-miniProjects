// Qs1. Try out the following events in Event Listener on your own :
// - mouseout
document.addEventListener("mouseout", (event) => {
  console.log(`mouseout,X:${event.x} Y:${event.y}`);
});

// - keypress
document.addEventListener("keypress", (event) => {
  console.log(`keypress:${event.key}, keyCode:${event.code}`);
});

// - Scroll
document.addEventListener("scroll", (event) => {
  console.log("page scrolled", event);
});

// - load
window.addEventListener("load", (event) => {
  console.log("page is loaded, Event type:", event.type);
});


// Qs2. Create a button on the page using JavaScript. Add an event listener to the button that changes the button’s color to green when it is clicked.

let body = document.querySelector("body");
body.innerHTML = "<button>click me!</button>";
document.addEventListener(
  "click",
  (event) => (document.querySelector("button").style.backgroundColor = "green")
);


// Qs3. Create an input element on the page with a placeholder ”enter your name” and an H2 heading on the page inside HTML.

let input = document.createElement("input");
input.setAttribute("placeholder", "Enter your name");
body.appendChild(input);

let h2 = document.createElement("h2");
body.prepend(h2);

addEventListener("input", (event) => (h2.innerText = input.value));
