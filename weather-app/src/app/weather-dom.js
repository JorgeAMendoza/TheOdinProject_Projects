import { getWeatherData } from "./utils/api-calls/get-weather-data";
import { mainWeatherComponent } from "./components/main-weather";
import { forecastWeatherComponent } from "./components/forecast-weather";
import { queryDestructure } from "./utils/query/query-destructure";

export const weatherDOM = () => {
  let _weatherDataObject;
  let _requestActive = false;
  const _staticDOM = {
    searchForm: document.querySelector("#searchForm"),
    unitChangeButton: document.querySelector("#unitChangeButton"),
    currentWeatherSection: document.querySelector("#currentWeather"),
    forecastDisplay: document.querySelector("#forecastDisplay"),
    errorMessage: document.querySelector("#errorMessage"),
    errorText: document.querySelector("#errorText"),
  };
  let _unit = JSON.parse(localStorage.getItem("unit")) || "imperial";

  const _displayErrorMessage = (errorMessage) => {
    _staticDOM.errorText.textContent = errorMessage;
    _staticDOM.errorMessage.classList.add("show-error");
  };

  const _removeErrorMessage = () => {
    _staticDOM.errorMessage.classList.remove("show-error");
    _staticDOM.errorText.textContent = "";
  };

  // function to start the program
  const startWeatherApp = async () => {
    // const weatherData = await getWeatherData("dallas", "metric", "TX");
    // console.log(weatherData);
    // Remove all html from the main page.
    // get back weather data and pass it into fucntion to create currnet weather card.
    // pass weather object into the forecat component to create arrays of componet HTML markup
    // write the content into the page, letting CSS handle animations.
    // set the text content of the button based on saved or inital unit value.
  };

  const _getNewWeather = async (e) => {
    if (_requestActive) return;
    _removeErrorMessage();

    e.preventDefault();
    const userSearch = e.target.elements.search.value;
    const cityRegex = /^[A-Za-z.' ]+$/;
    const cityStateRegex = /^[A-Za-z.' ]+$|^[A-Za-z.' ]+, [A-Za-z][A-Za-z]$/;

    if (cityRegex.test(userSearch)) {
      const userCity = userSearch;
      _weatherDataObject = await getWeatherData(userCity, _unit, "");
    } else if (cityStateRegex.test(userSearch)) {
      const [userCity, userState] = queryDestructure(userSearch);
      _weatherDataObject = await getWeatherData(userCity, _unit, userState);
    } else {
      _displayErrorMessage("Invalid City Name, Please Try Again");
      return;
    }
    _setWeatherDOM();
  };

  const _setWeatherDOM = () => {
    // have everything "disspear from the screen" meaing set opacity to 0 and have the loading gif appear in the center of the main html. (NEED TO GO CSS AND DO THIS)

    const newMainWeather = mainWeatherComponent(_weatherDataObject);
    _staticDOM.currentWeatherSection.innerHTML = "";
    _staticDOM.currentWeatherSection.innerHTML += newMainWeather;

    const forecastWeather = forecastWeatherComponent(_weatherDataObject);
    _staticDOM.forecastDisplay.innerHTML = "";
    _staticDOM.forecastDisplay.innerHTML += forecastWeather;

    // If there is an error/ we get a string, remove the gif, set the opacity back to 1, and call teh error fucntion with the error message passed in.
    // Remove the loading gif.
    // Write the new weather data html onto the page, let CSS handle the rest (KEY FRAMES NECESSARY?)
  };

  const _changeWeatherUnits = (e) => {
    const unitButton = e.target;

    if (_unit === "imperial") {
      _unit = "metric";
      unitButton.textContent = "C°";
      localStorage.setItem("unit", JSON.stringify("metric"));
      _weatherDataObject.currentWeather.setToMetric();
      _weatherDataObject.forecastArray.forEach((forecast) =>
        forecast.setToMetric()
      );
    } else {
      _unit = "imperial";
      unitButton.textContent = "F°";
      localStorage.setItem("unit", JSON.stringify("imperial"));
      _weatherDataObject.currentWeather.setToImperial();
      _weatherDataObject.forecastArray.forEach((forecast) =>
        forecast.setToImperial()
      );
    }

    _changeWeatherUnitsDOM();
  };

  const _changeWeatherUnitsDOM = () => {
    const forecastCards = document.querySelectorAll(".forecast-display__card");
    const currentWeatherCard = document.querySelector("#currentWeather");

    const { forecastArray } = _weatherDataObject;
    const { currentWeather } = _weatherDataObject;

    for (let i = 0; i < forecastArray.length; i++) {
      forecastCards[i].querySelector(
        ".forecast-display__card__temperature__num--low"
      ).textContent = `${forecastArray[i].lowTemp}`;

      forecastCards[i].querySelector(
        ".forecast-display__card__temperature__num--high"
      ).textContent = `${forecastArray[i].highTemp}`;
    }

    // current WeatherCard
    currentWeatherCard.querySelector(
      ".current-weather__temperature"
    ).textContent = `${currentWeather.currentTemp} °`;

    currentWeatherCard.querySelector(
      ".current-weather__low-high__temp:first-child span"
    ).textContent = `${currentWeather.lowTemp} °`;

    currentWeatherCard.querySelector(
      ".current-weather__low-high__temp:last-child span"
    ).textContent = `${currentWeather.highTemp} °`;

    currentWeatherCard.querySelector(
      "#windText"
    ).textContent = `${currentWeather.wind}`;

    currentWeatherCard.querySelector("#windUnit").textContent =
      _unit === "imperial" ? "mph" : "kmh";
  };
  // Set Event listeners
  _staticDOM.searchForm.addEventListener("submit", _getNewWeather);
  _staticDOM.unitChangeButton.addEventListener("click", _changeWeatherUnits);

  _staticDOM.unitChangeButton.textContent = _unit === "imperial" ? "F°" : "C°";

  return {
    startWeatherApp,
  };
};
