let enter_location = document.querySelector(".enter-location");
let search = document.querySelector(".search");
let temp = document.querySelector(".temperature");
let cloud = document.querySelector(".cloud");
let humidity_value = document.querySelector("#humidity-value");
let wind_speed = document.querySelector("#wind-value");
let img = document.querySelector(".weather-img");

async function checkWeather(city) {
  const apikey = "11a321ba54f0e85d9fae9c6958623600";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  // openWeather API calling
  let weather_info = await fetch(url).then((res) => res.json());
  console.log(weather_info);
  temp.innerHTML = `${Math.round(weather_info.main.temp - 273.15)}°C`;
  cloud.innerHTML = `${weather_info.weather[0].main}`;
  humidity_value.innerHTML = `${weather_info.main.humidity}%`;
  wind_speed.innerHTML = `${weather_info.wind.speed}km/h`;

  switch (weather_info.weather[0].main) {
    case "clouds":
      img.src = "./assets/cloud.png";
      break;
    case "clear":
      img.src = "./assets/clear.png";
      break;
    case "haze":
      img.src = "./assets/mist.png";
      break;
    case "rain":
      img.src = "./assets/rain.png";
      break;
    case "snow":
      img.src = "./assets/snow.png";
      break;
  }
}
search.addEventListener("click", () => {
  checkWeather(enter_location.value);
});
