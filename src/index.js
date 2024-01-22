// const img = document.querySelector("img");
// const searchInput = document.querySelector("#search");
// const submitButton = document.querySelector("#submit");

async function getWeatherData(location, metric) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=2532af33393349ed839124342242101&q=${location}&days=3`,
      { mode: "cors" },
    );

    const weatherData = await response.json();
    console.log(weatherData);

    const weatherDataObject = {
      country: weatherData.location.country,
      city: weatherData.location.name,
      time: weatherData.location.localtime,
    };

    console.log(weatherDataObject.time);

    const dayOneObject = {
      date: weatherData.forecast.forecastday[0].date,
      conditionText: weatherData.forecast.forecastday[0].day.condition.text,
      conditionIcon: weatherData.forecast.forecastday[0].day.condition.icon,
      temperatureC: weatherData.forecast.forecastday[0].day.avgtemp_c,
      temperatureF: weatherData.forecast.forecastday[0].day.avgtemp_f,
      chanceOfRain:
        weatherData.forecast.forecastday[0].day.daily_chance_of_rain,
      chanceOfSnow:
        weatherData.forecast.forecastday[0].day.daily_chance_of_snow,
    };

    console.log(dayOneObject.chanceOfRain);

    return weatherDataObject;
  } catch (error) {
    console.log(error);
    return error;
  }
}

getWeatherData("Budapest", "temp_c");

// submitButton.addEventListener("click", () => {
//   getGIF(searchInput.value);
// });
