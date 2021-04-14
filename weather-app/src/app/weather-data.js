import { currentWeatherCall } from "./api-calls/current-weather";
import { CurrentWeather } from "./weather-class/current.weather.class";

export const weatherData = () => {
  const currentWeatherData = new CurrentWeather(0, 0, 0, 0, 0, 0);
  const fireDayForecastData = [];
  let isMetric = false;
  //save this into locale storage???
  let currentCity = "dallas";

  const _setCurrentWeather = async (cityName) => {
    currentCity = cityName;
    const currentWeatherObject = isMetric
      ? await currentWeatherCall(cityName, "metric")
      : await currentWeatherCall(cityName, "imperial");

    const {
      status,
      currentTemp,
      minTemp,
      maxTemp,
      humidity,
      wind,
    } = currentWeatherObject;

    currentWeatherData.setNewCurrent(
      currentTemp,
      minTemp,
      maxTemp,
      status,
      humidity,
      wind
    );
  };

  const _setForecast = () => {};
  // function to set new fireday forecast
  // call function that makes the api call
  // get back an array that contains all the objects
  // erase the array that has the current five day forecast data.
  // insert the objects into the array.

  const _setToImperial = () => {
    // Call class method to change all to imperial
  };

  const _setToMetric = () => {
    // Call class method to set all to metric.
  };

  const getCurrentWeather = async (city, unit) => {
    // This is called by the Dom or controller
    if (currentCity !== city.toLowerCase()) {
      console.log("MAKING API CALL");
      // await _setCurrentWeather(city);
      // console.log(currentWeatherData.getWeatherProperties());
      // return with the class method call
    }

    // if unit is metric, set is metric to true, and call metric function
    if (unit === "metric") {
      console.log("CONVERTING TO METRIC");
      isMetric = true;
      _setToMetric();
    } else {
      console.log("CONVERTING TO IMPERIAL");
      isMetric = false;
      _setToImperial();
    }
    // Return object that only the weather properties.
  };

  // (public) funciton that returns five day forecast object/ makes copy and returns it.
  const getForecast = () => {
    console.log("Returning forecast");
    // return fireDayForecast;
  };

  getCurrentWeather("dallas", "metric");

  return {
    getCurrentWeather,
    getForecast,
  };
};
