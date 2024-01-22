/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixTQUFTO0FBQ3BHLFFBQVEsY0FBYztBQUN0Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZXRyaWNTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZXRyaWMtc2VsZWN0b3JdXCIpO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2VhcmNoLWlucHV0XVwiKTtcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zdWJtaXQtYnV0dG9uXVwiKTtcblxuZnVuY3Rpb24gcHJvY2Vzc1dlYXRoZXJEYXRhKHdlYXRoZXJEYXRhLCBtZXRyaWMpIHtcbiAgZnVuY3Rpb24gb2JqZWN0Q3JlYXRvcihjb3VudCkge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhT2JqZWN0ID0ge1xuICAgICAgY291bnRyeTogd2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeSxcbiAgICAgIGNpdHk6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICBjdXJyZW50VGltZTogd2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgICAgZGF0ZTogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbY291bnRdLmRhdGUsXG4gICAgICBjb25kaXRpb25UZXh0OiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtjb3VudF0uZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgY29uZGl0aW9uSWNvbjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbY291bnRdLmRheS5jb25kaXRpb24uaWNvbixcbiAgICAgIHRlbXBlcmF0dXJlQzogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbY291bnRdLmRheS5hdmd0ZW1wX2MsXG4gICAgICB0ZW1wZXJhdHVyZUY6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2NvdW50XS5kYXkuYXZndGVtcF9mLFxuICAgICAgY2hhbmNlT2ZSYWluOlxuICAgICAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtjb3VudF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluLFxuICAgICAgY2hhbmNlT2ZTbm93OlxuICAgICAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtjb3VudF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9zbm93LFxuICAgIH07XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhT2JqZWN0O1xuICB9XG5cbiAgY29uc3Qgd2VhdGhlckRhdGFPYmplY3QgPSBvYmplY3RDcmVhdG9yKDApO1xuXG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2l0eV1cIik7XG4gIGNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY291bnRyeV1cIik7XG4gIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGltZV1cIik7XG5cbiAgY2l0eS5pbm5lclRleHQgPSB3ZWF0aGVyRGF0YU9iamVjdC5jaXR5O1xuICBjb3VudHJ5LmlubmVyVGV4dCA9IHdlYXRoZXJEYXRhT2JqZWN0LmNvdW50cnk7XG4gIHRpbWUuaW5uZXJUZXh0ID0gd2VhdGhlckRhdGFPYmplY3QuY3VycmVudFRpbWU7XG5cbiAgY29uc3QgZGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YV49ZGF5LV1cIik7XG4gIGxldCBkYXlDb3VudCA9IDA7XG5cbiAgZGF5cy5mb3JFYWNoKChkYXkpID0+IHtcbiAgICBjb25zdCBkYWlseURhdGEgPSBvYmplY3RDcmVhdG9yKGRheUNvdW50KTtcbiAgICBjb25zdCBjb25kaXRpb25JY29uID0gZGF5LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1pY29uXVwiKTtcbiAgICBjb25zdCBjb25kaXRpb25UZXh0ID0gZGF5LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jb25kaXRpb24tdGV4dF1cIik7XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkYXkucXVlcnlTZWxlY3RvcihcIltkYXRhLXRlbXBlcmF0dXJlXVwiKTtcbiAgICBjb25zdCByYWluID0gZGF5LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1yYWluXVwiKTtcbiAgICBjb25zdCBzbm93ID0gZGF5LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zbm93XVwiKTtcblxuICAgIGNvbmRpdGlvbkljb24uc3JjID0gZGFpbHlEYXRhLmNvbmRpdGlvbkljb247XG4gICAgY29uZGl0aW9uVGV4dC5pbm5lclRleHQgPSBkYWlseURhdGEuY29uZGl0aW9uVGV4dDtcbiAgICBpZiAobWV0cmljID09PSBcIkNlbHNpdXNcIikge1xuICAgICAgdGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gZGFpbHlEYXRhLnRlbXBlcmF0dXJlQztcbiAgICB9IGVsc2UgaWYgKG1ldHJpYyA9PT0gXCJGYXJlbmhlaXRcIikge1xuICAgICAgdGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gZGFpbHlEYXRhLnRlbXBlcmF0dXJlRjtcbiAgICB9XG4gICAgcmFpbi5pbm5lclRleHQgPSBkYWlseURhdGEuY2hhbmNlT2ZSYWluO1xuICAgIHNub3cuaW5uZXJUZXh0ID0gZGFpbHlEYXRhLmNoYW5jZU9mU25vdztcblxuICAgIGRheUNvdW50ICs9IDE7XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbiwgbWV0cmljKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0yNTMyYWYzMzM5MzM0OWVkODM5MTI0MzQyMjQyMTAxJnE9JHtsb2NhdGlvbn0mZGF5cz0zYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfSxcbiAgICApO1xuXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXG4gICAgcHJvY2Vzc1dlYXRoZXJEYXRhKHdlYXRoZXJEYXRhLCBtZXRyaWMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuXG5nZXRXZWF0aGVyRGF0YShcIkJ1ZGFwZXN0XCIsIFwiQ2Vsc2l1c1wiKTtcblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBnZXRXZWF0aGVyRGF0YShzZWFyY2hJbnB1dC52YWx1ZSwgbWV0cmljU2VsZWN0b3IudmFsdWUpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=