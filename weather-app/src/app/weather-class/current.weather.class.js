import { convertTempToMetric } from "../utils/unit-conversion/convert-temp-to-metric";
import { convertTempToImperial } from "../utils/unit-conversion/convert-temp-to-imperial";
import { convertWindToMetric } from "../utils/unit-conversion/convert-wind-to-metric";
import { convertWindToImperial } from "../utils/unit-conversion/convert-wind-to-imperial";

export class CurrentWeather {
  constructor(currentTemp, status, statusDescription, humidity, wind) {
    this.currentTemp = currentTemp;
    this.status = status;
    this.statusDescription = statusDescription;
    this.humidity = humidity;
    this.wind = wind;
  }

  setToMetric() {
    this.currentTemp = convertTempToMetric(this.currentTemp);
    this.wind = convertWindToMetric(this.wind);
  }

  setToImperial() {
    this.currentTemp = convertTempToImperial(this.currentTemp);
    this.wind = convertWindToImperial(this.wind);
  }
}
