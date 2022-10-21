import API_KEY from "../api.js";

const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.name} ${data.sys.country}`;
      weather.innerHTML = `<i class="fa-solid fa-cloud"></i> ${
        data.weather[0].main
      } ${parseInt(data.main.temp)}&#176`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
