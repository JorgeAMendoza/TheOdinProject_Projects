import cloudyNight from "../../assets/weather-icons/cloudy-night.svg";
import windIcon from "../../assets/weather-icons/wind.svg";
import humidityIcon from "../../assets/weather-icons/humidity.svg";

export const mainWeatherComponent = ({
  cityName,
  cityLocation,
  currentWeather,
}) => {
  return `<p class="current-weather__city">${cityName}, ${cityLocation}</p>
    <img
      class="current-weather__icon"
      src=${cloudyNight}
      alt="Sunny Weather"
    />
    <p id="currentTemp" class="current-weather__temperature">${Math.round(
      currentWeather.currentTemp
    )} °</p>
    <p id="currentStatus" class="current-weather__status">${
      currentWeather.statusDescription
    }</p>
    <div class="current-weather__low-high">
      <p class="current-weather__low-high__temp">Low <span>${Math.round(
        currentWeather.lowTemp
      )} °</span></p>
      <p class="current-weather__low-high__temp">High <span>${Math.round(
        currentWeather.highTemp
      )} °</span></p>
    </div>
    <div class="current-weather__stats">
      <div class="current-weather__stats__info">
        <img
          class="current-weather__stats__info__icon"
          src="${windIcon}"
          alt="Current Wind"
        />
        <p class="current-weather__stats__info__type">Wind Speed</p>
        <p class="current-weather__stats__info__text">
          <span id="windText" class="current-weather__stats__info__text__value">${Math.round(
            currentWeather.wind
          )}</span>
          <span id="windUnit" class="current-weather__stats__info__text__unit">mph</span>
        </p>
      </div>
      <div class="current-weather__stats__info">
        <img
          class="current-weather__stats__info__icon"
          src=${humidityIcon}
          alt="Current Humidity"
        />
        <p class="current-weather__stats__info__type">Humidity</p>
        <p class="current-weather__stats__info__text">
          <span class="current-weather__stats__info__text__value">${Math.round(
            currentWeather.humidity
          )}</span>
          <span class="current-weather__stats__info__text__unit">%</span>
        </p>
      </div>
    </div>`;
};
