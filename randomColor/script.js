// color generator program
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  document.querySelector("h3").innerText = `Random color: ${genColor()}`;
  document.querySelector("div").style.backgroundColor = genColor();
});

function genColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red},${green},${blue})`;
  return color;
}
