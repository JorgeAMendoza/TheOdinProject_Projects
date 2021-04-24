import axios from "axios";
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
    const { lon: targetLongitude, lat: targetLatitude, name: targetName } = targetGeoData;
    const targetLocation = state ? targetGeoData.state : targetGeoData.country;

    // Pass into one call weather API
    // Extract the current weather object,and array containing the 7 day forecast.
    // Create new class from the current weather data,
    // create new classes from the forecast data.
    // return an object containing the city name, location (state or country), instance of current weather class, an array which contains an instance of forecast.
  } catch (e) {
    console.log(e.message);
  }
  // Iterate over that array, whatever object matches the exact name, return it and matches either location or state passed in, then return it.
  // destructure the city name, state or country, longitude and latitude
  // So if state, does not exist, save the county as the "location" property.
};
