const input = document.querySelector("#input-field");
const searchBtn = document.querySelector("#searchBtn");
const name = document.querySelector("#city-name");
const weatherIcon = document.querySelector("#weather-icon");
const weatherTemp = document.querySelector("#weather-temp");
const humidityValue = document.querySelector("#humidity-value");
const windValue = document.querySelector("#wind-value");

searchBtn.addEventListener("click", () => {
  const cityName = input.value.trim();

  weatherApp(cityName);
});

function showIcon(src) {
  weatherIcon.src = src;
  weatherIcon.style.display = "block";
  document.querySelector("#weather-information").style.display = "block";

  weatherIcon.onerror = () => {
    weatherIcon.onerror = null;
    weatherIcon.src = "using/cloudy-day-1-cropped.svg";
  };
}

async function weatherApp(cityName) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5a20814a8c807aa4513aa3951649afb8&units=metric`,
  );

  const responseJson = await response.json();
  const condition = responseJson.weather[0].main;

  console.log(responseJson);

  weatherTemp.textContent = responseJson.main.temp + "°C";
  humidityValue.textContent = responseJson.main.humidity + "%";
  windValue.textContent = responseJson.wind.speed + " km/h";
  name.textContent = responseJson.name;

  if (condition === "Clear") {
    return showIcon("using/day-cropped.svg");
  }

  if (condition === "Clouds") {
    return showIcon("using/cloudy-day-1-cropped.svg");
  }

  if (condition === "Snow") {
    return showIcon("using/snowy-4-cropped.svg");
  }

  if (condition === "Rain" || condition === "Drizzle") {
    return showIcon("using/rainy-6-cropped.svg");
  }

  if (condition === "Thunderstorm") {
    return showIcon("using/thunder-cropped.svg");
  } else {
    return showIcon("using/icons8-fog-100-cropped.svg");
  }
}
