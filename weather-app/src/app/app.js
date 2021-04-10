import { weatherData } from "./weather-data";

// Import module that will make calls
// Call function that starts app (makes first call)

const weatherModule = weatherData();
weatherModule.getCurrentWeather();
