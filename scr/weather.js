function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humilityElement = document.querySelector("#humility");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.date.time * 1000);
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(data);
  temperatureElement.innerHTML = Math.round(temperature);
  descriptionElement.innerHTML = response.data.condition.description;
  humilityElement.innerHTML = `${response.data.temperature.humility}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}

function formatDate(data) {
  let hours = data.getHour();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[data.getDate()];
  if (minutes < 10) {
    minutes = "0${minutes}";
  }
  return "${day} ${hours}:${minutes}";
}

function searchCity(city) {
  let apiKEY = "0aed8e05tadf246fo437cfb406113d46";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}";
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.peventDefualt();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventlistener("submit", handleSearchSubmit);

searchCity("Pretoria");
