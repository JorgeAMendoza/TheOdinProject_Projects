import axios from "axios";

export const currentWeather = async (cityName = "Dallas") => {
  try {
    const curretnWeatherData = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=a4fd7e05b40980c0b9a29ba9590c0fe8"
    );
    console.log(curretnWeatherData);
  } catch {
    console.log("Something went wrong");
  }
  // Try
  // make api call make sure to use await!
  // get data back.
  // parse it, then either extract what you need to send it back, or just send it all back.
  // Return
  // Catch
  // if error is sent back by api, send some indicator that there was an error
  // return.
};
