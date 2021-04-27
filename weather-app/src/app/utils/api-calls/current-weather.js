import axios from "axios";
import { CurrentWeather } from "../../weather-class/current.weather.class";
import { grabGeoData } from "../grab-geo-data";
export const currentWeatherCall = async (cityName, units, state) => {
  try {
    const geoLocationResponse = state
      ? await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${state},US&limit=10&appid=a4fd7e05b40980c0b9a29ba9590c0fe8`
        )
      : await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=10&appid=a4fd7e05b40980c0b9a29ba9590c0fe8`
        );

    const targetGeoData = grabGeoData(geoLocationResponse.data, cityName, state);

    // console.log(targetGeoData);
    const { lon: targetLongitude, lat: targetLatitude } = targetGeoData;
    const targetLocation = state ? targetGeoData.state : targetGeoData.country;

    const weatherDataResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${targetLatitude}&lon=${targetLongitude}&exclude=minutely,hourly,alerts&units=${units}&appid=a4fd7e05b40980c0b9a29ba9590c0fe8`
    );

    const { current: currentWeatherData } = weatherDataResponse.data;
    const currentWeather = new CurrentWeather(
      currentWeatherData.temp,
      currentWeatherData.weather[0].main,
      currentWeatherData.weather[0].description,
      currentWeatherData.humidity,
      currentWeatherData.wind_speed
    );

    // Extract the 7 day forecast
    const { daily: forecastData } = weatherDataResponse.data;
    forecastData.shift();
    // iterate over the array, creating a new array that contains instances of the forecast class
    // return an object containing the city name, location (state or country), instance of current weather class, an array which contains an instance of forecast.
  } catch (e) {
    console.log(e.message);
  }
  // Iterate over that array, whatever object matches the exact name, return it and matches either location or state passed in, then return it.
  // destructure the city name, state or country, longitude and latitude
  // So if state, does not exist, save the county as the "location" property.
};
