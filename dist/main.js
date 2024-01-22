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
      temperature.innerText = `Average temperature: \n ${dailyData.temperatureC} Celsius`;
    } else if (metric === "Farenheit") {
      temperature.innerText = `Average temperature: \n ${dailyData.temperatureF} Farenheit`;
    }
    rain.innerText = `Chance of raining: ${dailyData.chanceOfRain}%`;
    snow.innerText = `Chance of snowing: ${dailyData.chanceOfSnow}%`;

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

    processWeatherData(weatherData, metric);
  } catch (error) {
    console.log(error);
  }
}

getWeatherData("Budapest", "Celsius");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  getWeatherData(searchInput.value, metricSelector.value);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCx3QkFBd0I7QUFDakYsTUFBTTtBQUNOLHlEQUF5RCx3QkFBd0I7QUFDakY7QUFDQSwyQ0FBMkMsdUJBQXVCO0FBQ2xFLDJDQUEyQyx1QkFBdUI7O0FBRWxFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixTQUFTO0FBQ3BHLFFBQVEsY0FBYztBQUN0Qjs7QUFFQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWV0cmljU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWV0cmljLXNlbGVjdG9yXVwiKTtcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNlYXJjaC1pbnB1dF1cIik7XG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc3VibWl0LWJ1dHRvbl1cIik7XG5cbmZ1bmN0aW9uIHByb2Nlc3NXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSwgbWV0cmljKSB7XG4gIGZ1bmN0aW9uIG9iamVjdENyZWF0b3IoY291bnQpIHtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YU9iamVjdCA9IHtcbiAgICAgIGNvdW50cnk6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnksXG4gICAgICBjaXR5OiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lLFxuICAgICAgY3VycmVudFRpbWU6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICAgIGRhdGU6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2NvdW50XS5kYXRlLFxuICAgICAgY29uZGl0aW9uVGV4dDogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbY291bnRdLmRheS5jb25kaXRpb24udGV4dCxcbiAgICAgIGNvbmRpdGlvbkljb246IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2NvdW50XS5kYXkuY29uZGl0aW9uLmljb24sXG4gICAgICB0ZW1wZXJhdHVyZUM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2NvdW50XS5kYXkuYXZndGVtcF9jLFxuICAgICAgdGVtcGVyYXR1cmVGOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtjb3VudF0uZGF5LmF2Z3RlbXBfZixcbiAgICAgIGNoYW5jZU9mUmFpbjpcbiAgICAgICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbY291bnRdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcbiAgICAgIGNoYW5jZU9mU25vdzpcbiAgICAgICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbY291bnRdLmRheS5kYWlseV9jaGFuY2Vfb2Zfc25vdyxcbiAgICB9O1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YU9iamVjdDtcbiAgfVxuXG4gIGNvbnN0IHdlYXRoZXJEYXRhT2JqZWN0ID0gb2JqZWN0Q3JlYXRvcigwKTtcblxuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNpdHldXCIpO1xuICBjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNvdW50cnldXCIpO1xuICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRpbWVdXCIpO1xuXG4gIGNpdHkuaW5uZXJUZXh0ID0gd2VhdGhlckRhdGFPYmplY3QuY2l0eTtcbiAgY291bnRyeS5pbm5lclRleHQgPSB3ZWF0aGVyRGF0YU9iamVjdC5jb3VudHJ5O1xuICB0aW1lLmlubmVyVGV4dCA9IHdlYXRoZXJEYXRhT2JqZWN0LmN1cnJlbnRUaW1lO1xuXG4gIGNvbnN0IGRheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGFePWRheS1dXCIpO1xuICBsZXQgZGF5Q291bnQgPSAwO1xuXG4gIGRheXMuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgY29uc3QgZGFpbHlEYXRhID0gb2JqZWN0Q3JlYXRvcihkYXlDb3VudCk7XG4gICAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRheS5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaWNvbl1cIik7XG4gICAgY29uc3QgY29uZGl0aW9uVGV4dCA9IGRheS5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY29uZGl0aW9uLXRleHRdXCIpO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZGF5LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10ZW1wZXJhdHVyZV1cIik7XG4gICAgY29uc3QgcmFpbiA9IGRheS5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcmFpbl1cIik7XG4gICAgY29uc3Qgc25vdyA9IGRheS5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc25vd11cIik7XG5cbiAgICBjb25kaXRpb25JY29uLnNyYyA9IGRhaWx5RGF0YS5jb25kaXRpb25JY29uO1xuICAgIGNvbmRpdGlvblRleHQuaW5uZXJUZXh0ID0gZGFpbHlEYXRhLmNvbmRpdGlvblRleHQ7XG4gICAgaWYgKG1ldHJpYyA9PT0gXCJDZWxzaXVzXCIpIHtcbiAgICAgIHRlbXBlcmF0dXJlLmlubmVyVGV4dCA9IGBBdmVyYWdlIHRlbXBlcmF0dXJlOiBcXG4gJHtkYWlseURhdGEudGVtcGVyYXR1cmVDfSBDZWxzaXVzYDtcbiAgICB9IGVsc2UgaWYgKG1ldHJpYyA9PT0gXCJGYXJlbmhlaXRcIikge1xuICAgICAgdGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gYEF2ZXJhZ2UgdGVtcGVyYXR1cmU6IFxcbiAke2RhaWx5RGF0YS50ZW1wZXJhdHVyZUZ9IEZhcmVuaGVpdGA7XG4gICAgfVxuICAgIHJhaW4uaW5uZXJUZXh0ID0gYENoYW5jZSBvZiByYWluaW5nOiAke2RhaWx5RGF0YS5jaGFuY2VPZlJhaW59JWA7XG4gICAgc25vdy5pbm5lclRleHQgPSBgQ2hhbmNlIG9mIHNub3dpbmc6ICR7ZGFpbHlEYXRhLmNoYW5jZU9mU25vd30lYDtcblxuICAgIGRheUNvdW50ICs9IDE7XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbiwgbWV0cmljKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0yNTMyYWYzMzM5MzM0OWVkODM5MTI0MzQyMjQyMTAxJnE9JHtsb2NhdGlvbn0mZGF5cz0zYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfSxcbiAgICApO1xuXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBwcm9jZXNzV2VhdGhlckRhdGEod2VhdGhlckRhdGEsIG1ldHJpYyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbmdldFdlYXRoZXJEYXRhKFwiQnVkYXBlc3RcIiwgXCJDZWxzaXVzXCIpO1xuXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZ2V0V2VhdGhlckRhdGEoc2VhcmNoSW5wdXQudmFsdWUsIG1ldHJpY1NlbGVjdG9yLnZhbHVlKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9