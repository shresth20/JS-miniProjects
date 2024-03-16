let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;

let stopWatchFun = () => {
  document.querySelector("#start").addEventListener("click", () => {
    if (intervalId === null) {
      intervalId = setInterval(() => {
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
          if (minutes >= 60) {
            minutes = 0;
            hours++;
          }
        }
        const formattedTime =
          pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
        document.querySelector("#time").innerHTML = formattedTime;
      }, 1000);
    }
  });

  pad = (value) => {
    return value < 10 ? "0" + value : value;
  };

  document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
  });

  document.querySelector("#reset").addEventListener("click", () => {
    clearInterval(intervalId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    intervalId = null;
    const formattedTime = `00:00:00`;
    document.querySelector("#time").innerHTML = formattedTime;
  });
};

stopWatchFun();
