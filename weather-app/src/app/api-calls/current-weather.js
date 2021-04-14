import axios from "axios";

export const currentWeatherCall = async (cityName, units) => {
  try {
    const currentWeatherData = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=a4fd7e05b40980c0b9a29ba9590c0fe8`
    );
    const currentWeatherObject = {
      status: currentWeatherData.data.weather[0].description,
      currentTemp: currentWeatherData.data.main.temp,
      minTemp: currentWeatherData.data.main.temp_min,
      maxTemp: currentWeatherData.data.main.temp_max,
      humidity: currentWeatherData.data.main.humidity,
      wind: currentWeatherData.data.wind.speed,
    };

    return currentWeatherObject;
  } catch (e) {
    console.log(e);
  }
};
