import { currentWeatherCall } from "./utils/api-calls/current-weather";
import { CurrentWeather } from "./weather-class/current.weather.class";

export const weatherData = () => {
  const getCurrentWeather = async (city, unit, state = "") => {
    const weatherData = await currentWeatherCall(city, unit, state);
    console.log(weatherData)
  };

  getCurrentWeather("Dallas", "imperial", "TX");

  return {
    getCurrentWeather,
  };
};
