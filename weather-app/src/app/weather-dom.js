import { getWeatherData } from "./utils/api-calls/get-weather-data";
import { mainWeatherComponent } from "./components/main-weather";
import { queryDestructure } from "./utils/query/query-destructure";

export const weatherDOM = () => {
  let _weatherDataObject;
  let _requestActive = false;
  const _staticDOM = {
    searchForm: document.querySelector("#searchForm"),
    unitChangeButton: document.querySelector("#unitChangeButton"),
    currentWeatherSection: document.querySelector("#currentWeather"),
    errorMessage: document.querySelector("#errorMessage"),
    errorText: document.querySelector("#errorText"),
  };
  //   Save current unit to localte storage, if nothing in local storage set default to imperial.

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
  };

  const _getNewWeather = async (e) => {
    if (_requestActive) return;
    _removeErrorMessage();

    e.preventDefault();
    const userSearch = e.target.elements.search.value;
    const userUnit = _staticDOM.unitChangeButton.dataset.unit;
    const cityRegex = /^[A-Za-z.' ]+$/;
    const cityStateRegex = /^[A-Za-z.' ]+$|^[A-Za-z.' ]+, [A-Za-z][A-Za-z]$/;

    if (cityRegex.test(userSearch)) {
      const userCity = userSearch;
      _weatherDataObject = await getWeatherData(userCity, userUnit, "");
    } else if (cityStateRegex.test(userSearch)) {
      const [userCity, userState] = queryDestructure(userSearch);
      _weatherDataObject = await getWeatherData(userCity, userUnit, userState);
    } else {
      _displayErrorMessage("Invalid City Name, Please Try Again");
      return;
    }

    _setWeatherDOM();
  };

  const _setWeatherDOM = () => {
    // have everything "disspear from the screen" meaing set opacity to 0 and have the loading gif appear in the center of the main html. (NEED TO GO CSS AND DO THIS)
    // Remove the
    const newMainWeather = mainWeatherComponent(_weatherDataObject);

    _staticDOM.currentWeatherSection.innerHTML = "";
    _staticDOM.currentWeatherSection.innerHTML += newMainWeather;

    // If there is an error/ we get a string, remove the gif, set the opacity back to 1, and call teh error fucntion with the error message passed in.
    // Call function to create current weather component
    // Call function to create the forecast components.
    // delete the previous html.
    // Remove the loading gif.
    // Write the new weather data html onto the page, let CSS handle the rest (KEY FRAMES NECESSARY?)
  };

  const changeWeatherUnits = () => {
    //  If the current unit value is imperial
    // then call the imperial method on teh current weather object and the forecast data (forecast will require iteration over the array)
    // If the current unit value is metric, then do the same process as above.
    // the dom here is dynamic so we have to keep grabbing it here.
    // Grab the main temp dom, set it to the new value in the object.
    // Grab the humidiy and wind and change those as well.
    // For wind, make sure to change the "mph" and "kmh" depending on the situation.
    // Grab all the forecast components.
    // iterate over the the DOM array.
    // In each iteration set its new values according to its values in the weather object.
    // regular for loop may be required.
    // End exeuction
  };

  // Set Event listeners
  _staticDOM.searchForm.addEventListener("submit", _getNewWeather);

  // Return only start, newWeather, changeUnit which to be called by api.
  return {
    startWeatherApp,
    changeWeatherUnits,
  };
};
