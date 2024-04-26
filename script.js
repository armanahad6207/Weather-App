let enter_location = document.querySelector(".enter-location");
let search = document.querySelector(".search");
let temp = document.querySelector(".temperature");
let cloud = document.querySelector(".cloud");
let humidity_value = document.querySelector("#humidity-value");
let wind_speed = document.querySelector("#wind-value");
let image = document.querySelector(".weather-img");

async function checkWeather(city) {
  const apikey = "11a321ba54f0e85d9fae9c6958623600";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

  // openWeather API calling
  let weather_info = await fetch(url).then((res) => res.json());

  if (weather_info.cod === "404") {
    document.querySelector(".location-not-found").style.display = "flex";
    document.querySelector(".weather-body").style.display = "none";
    return;
  }

  document.querySelector(".weather-body").style.display = "block";
  document.querySelector(".location-not-found").style.display = "none";

  temp.innerHTML = `${Math.round(weather_info.main.temp - 273.15)}°C`;
  cloud.innerHTML = `${weather_info.weather[0].main}`;
  humidity_value.innerHTML = `${weather_info.main.humidity}%`;
  wind_speed.innerHTML = `${weather_info.wind.speed}km/h`;
  console.log(weather_info.weather[0].main);
  switch (weather_info.weather[0].main) {
    case "Clouds":
      image.src = "./assets/cloud.png";

      break;
    case "Clear":
      image.src = "./assets/clear.png";
      break;
    case "Haze":
      image.src = "./assets/mist.png";

      break;
    case "Rain":
      image.src = "./assets/rain.png";
      break;
    case "Snow":
      image.src = "./assets/snow.png";
      break;
  }
}
search.addEventListener("click", () => {
  checkWeather(enter_location.value);
});
