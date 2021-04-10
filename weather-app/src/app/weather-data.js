import { currentWeather } from "./api-calls/current-weather";

export const weatherData = () => {
  const currentWeatherData = {};
  const fireDayForecastData = [];

  const _setCurrentWeather = () => {};
  // Call function that makes api call
  // get bakc object that has the data.
  // set teh current weather object here to that new data. (make sure to use destructuring)

  const _setForecast = () => {};
  // function to set new fireday forecast
  // call function that makes the api call
  // get back an array that contains all the objects
  // erase the array that has the current five day forecast data.
  // insert the objects into the array.

  const getCurrentWeather = () => {
    currentWeather();
    console.log("Returning currentWeather");

    // return currentWeather;
  };

  // (public) funciton that returns five day forecast object/ makes copy and returns it.
  const getForecast = () => {
    console.log("Returning forecast");
    // return fireDayForecast;
  };
  return {
    getCurrentWeather,
    getForecast,
  };
};
