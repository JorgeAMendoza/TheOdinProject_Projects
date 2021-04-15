import { convertTempToMetric } from "../unit-conversion-utils/convert-temp-to-metric";
import { convertTempToImperial } from "../unit-conversion-utils/convert-temp-to-imperial";
import { convertWindToMetric } from "../unit-conversion-utils/convert-wind-to-metric";
import { convertWindToImperial } from "../unit-conversion-utils/convert-wind-to-imperial";

export class CurrentWeather {
  constructor(currentTemp, status, minTemp, maxTemp, humidity, wind) {
    this.currentTemp = currentTemp;
    this.minTemp = minTemp;
    this.maxTemp = maxTemp;
    this.status = status;
    this.humidity = humidity;
    this.wind = wind;
  }

  setToMetric() {
    this.currentTemp = convertTempToMetric(this.currentTemp);
    this.minTemp = convertTempToMetric(this.minTemp);
    this.maxTemp = convertTempToMetric(this.maxTemp);
    this.wind = convertWindToMetric(this.wind);
  }

  setToImperial() {
    this.currentTemp = convertTempToImperial(this.currentTemp);
    this.minTemp = convertTempToImperial(this.minTemp);
    this.maxTemp = convertTempToImperial(this.maxTemp);
    this.wind = convertWindToImperial(this.wind);
  }

  setNewCurrent(
    newCurrentTemp,
    newMinTemp,
    newMaxTemp,
    newStatus,
    newHumidity,
    newWind
  ) {
    // Object destructuring in teh arguemnnts? would make it easier to work with and less code.
    this.currentTemp = newCurrentTemp;
    this.minTemp = newMinTemp;
    this.maxTemp = newMaxTemp;
    this.status = newStatus;
    this.humidity = newHumidity;
    this.wind = newWind;
  }
}
