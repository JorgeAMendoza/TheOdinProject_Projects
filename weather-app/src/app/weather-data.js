import { currentWeatherCall } from "./api-calls/current-weather";
import { CurrentWeather } from "./weather-class/current.weather.class";

export const weatherData = () => {
  const currentWeatherData = new CurrentWeather(0, 0, 0, 0, 0, 0);
  const fireDayForecastData = [];
  const isMetric = false;
  //save this into locale storage???

  const _setCurrentWeather = async (cityName) => {
    const currentWeatherData = isMetric
      ? await currentWeatherCall(cityName, "metric")
      : await currentWeatherCall(cityName, "imperial");

    // Here, call the method that will reset the values, meaning grab the values from the new weather object,
    //and pass those into that method.
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

  const changeUnit = () => {
    isMetric = !isMetric;
  };

  const getCurrentWeather = (city = "Dallas") => {
    // This is called by the Dom or controller
    _setCurrentWeather(city);
    return currentWeatherData;
  };

  // (public) funciton that returns five day forecast object/ makes copy and returns it.
  const getForecast = () => {
    console.log("Returning forecast");
    // return fireDayForecast;
  };

  return {
    getCurrentWeather,
    getForecast,
    changeUnit,
  };
};
