/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsU0FBUztBQUNwRyxRQUFRLGNBQWM7QUFDdEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4vLyBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoXCIpO1xuLy8gY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIik7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uLCBtZXRyaWMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTI1MzJhZjMzMzkzMzQ5ZWQ4MzkxMjQzNDIyNDIxMDEmcT0ke2xvY2F0aW9ufSZkYXlzPTNgLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9LFxuICAgICk7XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF0YU9iamVjdCA9IHtcbiAgICAgIGNvdW50cnk6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnksXG4gICAgICBjaXR5OiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lLFxuICAgICAgdGltZTogd2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YU9iamVjdC50aW1lKTtcblxuICAgIGNvbnN0IGRheU9uZU9iamVjdCA9IHtcbiAgICAgIGRhdGU6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRhdGUsXG4gICAgICBjb25kaXRpb25UZXh0OiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLnRleHQsXG4gICAgICBjb25kaXRpb25JY29uOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLmljb24sXG4gICAgICB0ZW1wZXJhdHVyZUM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5hdmd0ZW1wX2MsXG4gICAgICB0ZW1wZXJhdHVyZUY6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5hdmd0ZW1wX2YsXG4gICAgICBjaGFuY2VPZlJhaW46XG4gICAgICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcbiAgICAgIGNoYW5jZU9mU25vdzpcbiAgICAgICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9zbm93LFxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyhkYXlPbmVPYmplY3QuY2hhbmNlT2ZSYWluKTtcblxuICAgIHJldHVybiB3ZWF0aGVyRGF0YU9iamVjdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59XG5cbmdldFdlYXRoZXJEYXRhKFwiQnVkYXBlc3RcIiwgXCJ0ZW1wX2NcIik7XG5cbi8vIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICBnZXRHSUYoc2VhcmNoSW5wdXQudmFsdWUpO1xuLy8gfSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=