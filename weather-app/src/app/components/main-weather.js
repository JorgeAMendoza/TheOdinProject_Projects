import cloudyNight from "../../assets/weather-icons/cloudy-night.svg";
import windIcon from "../../assets/weather-icons/wind.svg";
import humidityIcon from "../../assets/weather-icons/humidity.svg";

export const mainWeatherComponent = (city, location, weatherData) => {
  return `<section id="currentWeather" class="current-weather">
    <p class="current-weather__city">${city}, ${location}</p>
    <img
      class="current-weather__icon"
      src=${cloudyNight}
      alt="Sunny Weather"
    />
    <p id="currentTemp" class="current-weather__temperature">${weatherData.currentTemp} °</p>
    <p id="currentStatus" class="current-weather__status">${weatherData.statusDescription}</p>
    <div class="current-weather__stats">
      <div class="current-weather__stats__info">
        <img
          class="current-weather__stats__info__icon"
          src="${windIcon}"
          alt="Current Wind"
        />
        <p class="current-weather__stats__info__type">Wind Speed</p>
        <p class="current-weather__stats__info__text">
          <span class="current-weather__stats__info__text__value">${weatherData.wind}</span>
          <span class="current-weather__stats__info__text__unit">mph</span>
        </p>
      </div>
      <div class="current-weather__stats__info">
        <img
          class="current-weather__stats__info__icon"
          src=${humidityIcon}
          alt="Current Humidity"
        />
        <p class="current-weather__stats__info__type">Wind Speed</p>
        <p class="current-weather__stats__info__text">
          <span class="current-weather__stats__info__text__value">${weatherData.humidity}</span>
          <span class="current-weather__stats__info__text__unit">mph</span>
        </p>
      </div>
    </div>
  </section>`;
};
