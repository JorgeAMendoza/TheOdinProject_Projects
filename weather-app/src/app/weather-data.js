import { currentWeatherCall } from "./api-calls/current-weather";
import { CurrentWeather } from "./weather-class/current.weather.class";

export const weatherData = () => {
  const _setCurrentWeather = async (cityName, unitType) => {
    // Make call to weather api, save that to new object.
    const weatherObject = await currentWeatherCall(cityName, unitType);
    if (typeof weatherObject === "string") {
      return weatherObject;
    } else {
      return new CurrentWeather(
        weatherObject.currentTemp,
        weatherObject.minTemp,
        weatherObject.maxTemp,
        weatherObject.status,
        weatherObject.humidity,
        weatherObject.wind
      );
    }
  };

  const _setForecast = () => {};
  // function to set new fireday forecast
  // call function that makes the api call
  // get back an array that contains all the objects
  // erase the array that has the current five day forecast data.
  // insert the objects into the array.

  const getCurrentWeather = async (city, unit) => {
    return await _setCurrentWeather("dallas", "metric");
  };

  // (public) funciton that returns five day forecast object/ makes copy and returns it.
  const getForecast = () => {
    console.log("Returning forecast");
    // return fireDayForecast;
  };

  getCurrentWeather();

  return {
    getCurrentWeather,
    getForecast,
  };
};
