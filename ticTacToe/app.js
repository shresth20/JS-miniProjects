let user = () => {
  let sym = document.querySelectorAll(".minibox");
  for (let s of sym) {
    s.addEventListener("click", (event) => {
      if (event.target.innerText === "") {
        event.target.innerText = "O";
        check();
        com();
      }
    });
  }
};

let com = () => {
  while (true) {
    let random = Math.floor(Math.random() * 9) + 1;
    let sym = document.querySelector(`#b${random}`);
    if (sym.innerText === "") {
      sym.innerText = "X";
      break;
    }
  }
  check();
};

let check = () => {
  let cells = document.querySelectorAll('.minibox');
  let lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  for (let line of lines) {
    let [a, b, c] = line;
    if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
      document.querySelector("#box").innerText = cells[a].innerText + " is WINS!";
      return;
    }
  }
  let isDraw = true;
  for (let cell of cells) {
    if (!cell.innerText) {
      isDraw = false;
      break;
    }
  }
  if (isDraw) {
    document.querySelector("#box").innerText = "DRAW!";
  }
};


let restart = ()=>{
  document.querySelector("#restart").addEventListener("click", () => {
  location.reload();
  });
}


// call the functions
user();
com();
restart()