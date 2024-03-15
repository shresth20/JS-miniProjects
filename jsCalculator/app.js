let list = [];

let num = () => {
  let num = document.querySelectorAll(".num");
  for (n of num) {
    n.addEventListener("click", (event) => {
      let click = event.target.textContent;
      list.push(click);
      let str = list.reduce((a, b) => a + b);
      document.querySelector("#screen").innerText = str;
    });
  }
};

let equalto = () => {
  document.querySelector("#equal").addEventListener("click", (event) => {
    document.querySelector("#screen").innerText = result();
  });
};

let result = () => {
  let str = list.reduce((a, b) => a + b);
  let add = eval(str); // Use eval to evaluate the arithmetic expression
  return add;
};

let clear = () => {
  document.querySelector("#clear").addEventListener("click", (event) => {
    list = [];
    document.querySelector("#screen").innerText = "";
  });
};

num();
equalto();
clear();
