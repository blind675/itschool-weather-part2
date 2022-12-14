const bucharest = document.querySelector(".bucharest");
const timisoara = document.querySelector(".timisoara");
const oradea = document.querySelector(".oradea");

function updateCityDisplay(city) {
  const currentCity = document.getElementById("current-city");
  currentCity.innerHTML = city + ".";
}

function updateCity(city) {
  // upadatam orasul afisat
  updateCityDisplay(city);

  localStorage.setItem("city", city);

  // afisam noile date pentru vremea curenta de la API
  displayCurrentWeather(city);

  // afisam noile date pentru prognoza
  displayWeatherForecast(city);
}

bucharest.addEventListener("click", function () {
  updateCity("București");
});

timisoara.addEventListener("click", function () {
  updateCity("Timișoara");
});

oradea.addEventListener("click", function () {
  updateCity("Oradea");
});
