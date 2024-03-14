let hit = 0;
let time = 11;
let score = 0;
let level = 0;

let randomNum = () => {
  return Math.floor(Math.random() * 10 + level * 2) + 1;
};

let hits = () => {
  bubbles();
  document.querySelector(
    "#level_num"
  ).innerHTML = `<div id="level_num" class="num">${level}</div>`;

  hit = randomNum();
  document.querySelector(
    "#hit_point"
  ).innerHTML = `<div id="hit_point" class="num">${hit}</div> `;
};

let bubbles = () => {
  let nums = "";
  for (let i = 0; i <= 152; i++) {
    let rn = randomNum();
    nums += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = nums;
};

let times = () => {
  setInterval(() => {
    if (time > 0) {
      time--;
    } else {
      clearInterval();
      document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`; //  <h3>Time Up</h3>
    }
    document.querySelector(
      "#time"
    ).innerHTML = `<div id="time" class="num">${time}</div>`;
  }, 1000);
};

let clicked_bubble_score = () => {
  document.querySelector("#pbtm").addEventListener("click", (event) => {
    let clicked = parseInt(event.target.textContent);
    if (hit === clicked) {
      score += 2;
      level += 1;
      time = 11;
      hits();
    } else {
      document.querySelector("#pbtm").innerHTML = `<h1>Wrong Choice</h1>`;
    }

    document.querySelector(
      "#score_point"
    ).innerHTML = `<div id="score_point" class="num">${score}</div>`;
  });
};

times();
hits();
clicked_bubble_score();
