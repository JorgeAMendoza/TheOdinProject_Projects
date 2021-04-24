import { convertTempToMetric } from "../utils/unit-conversion/convert-temp-to-metric";
import { convertTempToImperial } from "../utils/unit-conversion/convert-temp-to-imperial";
import { convertWindToMetric } from "../utils/unit-conversion/convert-wind-to-metric";
import { convertWindToImperial } from "../utils/unit-conversion/convert-wind-to-imperial";

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
}
