function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;

  let apikey = "40tod70f5a533a6bca99952485740ae6";
  let apiurl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apikey}&units=metric`;
  axios.get(apiurl).then(displayTemperature);
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector(".current-temperature-value");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = temperature;

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);
