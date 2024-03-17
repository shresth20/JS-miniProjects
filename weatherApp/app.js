// api key : 82005d27a116c2880c8f0fcb866998a0

const iconEle = document.querySelector("#icons");
const tempEle = document.querySelector("#temp p");
const statusEle = document.querySelector("#status");
const placeEle = document.querySelector("#place");
const msgEle = document.querySelector("#msg");

const weather = {};
weather.temperature = { unit: "celsius" };

const kelvin = 273;
const key = "82005d27a116c2880c8f0fcb866998a0";

let setPosition = (position) => {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  getWeather(latitude, longitude);
};

let showError = (error) => {
  msgEle.innerText = `${error.message}`;
};

let getWeather = (latitude, longitude) => {
  let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
  fetch(api)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      weather.temperature.value = Math.floor(data.main.temp - kelvin);
      weather.description = data.weather[0].description;
      weather.iconId = data.weather[0].icon;
      weather.city = data.name;
      weather.country = data.sys.country;
    })
    .then(() => {
      displayWeather();
    });
};

let displayWeather = () => {
  iconEle.innerHTML = `<img src="icons/${weather.iconId}.png"></img>`;
  tempEle.innerHTML = `${weather.temperature.value}°<span>C</span>`;
  statusEle.innerHTML = weather.description;
  placeEle.innerHTML = `${weather.city}, ${weather.country}`;
};

let celsiusToFahrenheit = (temperature) => {
  return (temperature * 9) / 5 + 32;
};

tempEle.addEventListener("click", () => {
  if (weather.temperature.value === undefined) return;

  if (weather.temperature.unit == "celsius") {
    let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
    fahrenheit = Math.floor(fahrenheit);

    tempEle.innerHTML = `${fahrenheit}°<span>F</span>`;
    weather.temperature.unit = "fahrenheit";
  } else {
    tempEle.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    weather.temperature.unit = "celsius";
  }
});

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  msgEle.innerText = "Browser Not Support Geolocation";
}
