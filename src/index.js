const metricSelector = document.querySelector("[data-metric-selector]");
const searchInput = document.querySelector("[data-search-input]");
const searchButton = document.querySelector("[data-submit-button]");

function processWeatherData(weatherData, metric) {
  function objectCreator(count) {
    const weatherDataObject = {
      country: weatherData.location.country,
      city: weatherData.location.name,
      currentTime: weatherData.location.localtime,
      date: weatherData.forecast.forecastday[count].date,
      conditionText: weatherData.forecast.forecastday[count].day.condition.text,
      conditionIcon: weatherData.forecast.forecastday[count].day.condition.icon,
      temperatureC: weatherData.forecast.forecastday[count].day.avgtemp_c,
      temperatureF: weatherData.forecast.forecastday[count].day.avgtemp_f,
      chanceOfRain:
        weatherData.forecast.forecastday[count].day.daily_chance_of_rain,
      chanceOfSnow:
        weatherData.forecast.forecastday[count].day.daily_chance_of_snow,
    };
    return weatherDataObject;
  }

  const weatherDataObject = objectCreator(0);

  const city = document.querySelector("[data-city]");
  const country = document.querySelector("[data-country]");
  const time = document.querySelector("[data-time]");

  city.innerText = weatherDataObject.city;
  country.innerText = weatherDataObject.country;
  time.innerText = weatherDataObject.currentTime;

  const days = document.querySelectorAll("[data^=day-]");
  let dayCount = 0;

  days.forEach((day) => {
    const dailyData = objectCreator(dayCount);
    const conditionIcon = day.querySelector("[data-icon]");
    const conditionText = day.querySelector("[data-condition-text]");
    const temperature = day.querySelector("[data-temperature]");
    const rain = day.querySelector("[data-rain]");
    const snow = day.querySelector("[data-snow]");

    conditionIcon.src = dailyData.conditionIcon;
    conditionText.innerText = dailyData.conditionText;
    if (metric === "Celsius") {
      temperature.innerText = dailyData.temperatureC;
    } else if (metric === "Farenheit") {
      temperature.innerText = dailyData.temperatureF;
    }
    rain.innerText = dailyData.chanceOfRain;
    snow.innerText = dailyData.chanceOfSnow;

    dayCount += 1;
  });
}

async function getWeatherData(location, metric) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=2532af33393349ed839124342242101&q=${location}&days=3`,
      { mode: "cors" },
    );

    const weatherData = await response.json();
    console.log(weatherData);

    processWeatherData(weatherData, metric);
  } catch (error) {
    console.log(error);
  }
}

getWeatherData("Budapest", "Celsius");

searchButton.addEventListener("click", () => {
  //   e.preventDefault();
  getWeatherData(searchInput.value, metricSelector.value);
});
