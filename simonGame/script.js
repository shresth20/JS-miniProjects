// simon game codes

let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;

let btns = ["red", "yellow", "green", "blue"];
let h2 = document.querySelector("h2");
let h1 = document.querySelector("h1");

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("gameflash");
  setTimeout(() => {
    btn.classList.remove("gameflash");
  }, 280);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 280);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `<b>GAME OVER</b>    Score:${level} <br> Press any key to start again !!`;
    h1.innerHTML = `Highest Score:${highScore()}`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(
      () => (document.querySelector("body").style.backgroundColor = ""),
      200
    );
    reset();
  }
}

function btnPress() {
  if (started == true) {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(`${userColor}`);
    checkAns(userSeq.length - 1);
  }
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
  btn.addEventListener("click", btnPress);
}

let l = level;
function highScore() {
  if (l < level) {
    l = level;
  }
  return l;
}

function reset() {
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
  }
  