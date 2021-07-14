import axios from "axios";
import { CurrentWeather } from "../../weather-class/current.weather.class";
import { ForecastWeather } from "../../weather-class/forecast.weather.class";
import { grabGeoData } from "./grab-geo-data";

export const getWeatherData = async (cityName, units, state) => {
  try {
    const geoLocationResponse = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${state},${
        state ? "US" : ""
      }&limit=10&appid=a4fd7e05b40980c0b9a29ba9590c0fe8`
    );

    const targetGeoData = grabGeoData(
      geoLocationResponse.data,
      cityName,
      state
    );

    const {
      lon: targetLongitude,
      lat: targetLatitude,
      name: targetName,
    } = targetGeoData;
    const targetLocation = state ? targetGeoData.state : targetGeoData.country;

    const weatherDataResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${targetLatitude}&lon=${targetLongitude}&exclude=minutely,hourly,alerts&units=${units}&appid=a4fd7e05b40980c0b9a29ba9590c0fe8`
    );

    const { current: currentWeatherData } = weatherDataResponse.data;
    const { daily: forecastData } = weatherDataResponse.data;
    forecastData.splice(6);
    const firstForecast = forecastData.shift();

    const currentWeather = new CurrentWeather(
      currentWeatherData.temp,
      firstForecast.temp.min,
      firstForecast.temp.max,
      currentWeatherData.weather[0].main,
      currentWeatherData.weather[0].description,
      currentWeatherData.humidity,
      currentWeatherData.wind_speed
    );

    const forecastArray = forecastData.map((item) => {
      return new ForecastWeather(
        item.temp.min,
        item.temp.max,
        item.weather[0].main
      );
    });

    return {
      cityName: targetName,
      cityLocation: targetLocation,
      forecastArray,
      currentWeather,
    };
  } catch (e) {
    return e.message;
  }
};
