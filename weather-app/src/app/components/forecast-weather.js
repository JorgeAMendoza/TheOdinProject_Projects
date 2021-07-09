import { dayName } from "../utils/date/day-name";
import { dateName } from "../utils/date/date-name";
import { monthName } from "../utils/date/month-name";
import rainIcon from "../../assets/weather-icons/rain.svg";
import trianagleSVG from "../../assets/imgs/triangle.svg";

export const forecastWeatherComponent = ({ forecastArray }) => {
  const dateObject = new Date();

  return forecastArray
    .map((data) => {
      dateObject.setDate(dateObject.getDate() + 1);
      // When it reaches the month, pass the value to teh month name function.
      // when it reaches the date, pass teh value to the month name function.

      return `
      <figure class="forecast-display__card">
          <img
            class="forecast-display__card__icon"
            src=${rainIcon}
            alt="Chance of Rain"
          />

          <p class="forecast-display__card__date">
            <span class="forecast-display__card__date__date-one">${dayName(
              dateObject.getDay()
            )},</span
            ><span
              class="forecast-display__card__date__comma"
              aria-hidden="true"
              >,
            </span>
            <span class="forecast-display__card__date__date-two"
              >${monthName(dateObject.getMonth())}, ${dateName(
        dateObject.getDate()
      )}</span
            >
          </p>

          <p class="forecast-display__card__outlook">${data.outlook}</p>

          <div class="forecast-display__card__temperature">
            <p class="forecast-display__card__temperature__temp">
              <img
                class="forecast-display__card__temperature__temp__icon"
                src=${trianagleSVG}
                alt="Low Temperature"
              />
              ${Math.round(data.lowTemp)}° <span class="degree-symbol"></span>
            </p>
            <p class="forecast-display__card__temperature__temp">
              <img
                class="forecast-display__card__temperature__temp__icon"
                src=${trianagleSVG}
                alt="High Temperature"
              />
              ${Math.round(data.highTemp)}°
              <span class="degree-symbol"></span>
            </p>
          </div>
        </figure>
      `;
    })
    .join("");
};
