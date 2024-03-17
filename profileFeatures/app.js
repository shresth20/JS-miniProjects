let addfriend = () => {
  let sta = document.querySelector("#status");
  let btn = document.querySelector("#btn");
  btn.addEventListener("click", (event) => {
    if (event.target.innerText === "Remove") {
      btn.style.color = "#0231a7";
      event.target.innerText = "Add Friend";
      sta.style.color = "#0231a7";
      sta.innerText = "Stranger";
    } else {
      event.target.style.color = "red";
      event.target.innerText = "Remove";
      sta.style.color = "red";
      sta.innerText = "Friend";
    }
  });
};

let like = () => {
  let like = document.querySelector("#like");
  document.querySelector("#dp").addEventListener("dblclick", () => {
    like.style.transform = "translate(-50%, -50%) scale(1)";
    like.style.opacity = 0.8;
    setTimeout(() => {
      like.style.transform = "translate(-50%, -50%) scale(0)";
      like.style.opacity = 0;
    }, 1300);
  });
};

like();
addfriend();
