import { currentWeatherCall } from "./utils/api-calls/current-weather";
import { CurrentWeather } from "./weather-class/current.weather.class";

export const weatherData = () => {
  const getCurrentWeather = async (city, unit, state = "") => {
    console.log(await currentWeatherCall(city, unit, state));
  };

  getCurrentWeather("Dallas", "metric", "TX");

  return {
    getCurrentWeather,
  };
};
