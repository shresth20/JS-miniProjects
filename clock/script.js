// clock program
let a;
let date;
let time;
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
setInterval(() => {
  d = new Date();
  date = d.toLocaleDateString();
  time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  // document.getElementById("date").innerHTML = date;
  document.getElementById("time").innerHTML = time + " <br>on " + date;
}, 1000);
