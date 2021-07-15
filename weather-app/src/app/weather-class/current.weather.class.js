import { convertTempToMetric } from "../utils/unit-conversion/convert-temp-to-metric";
import { convertTempToImperial } from "../utils/unit-conversion/convert-temp-to-imperial";
import { convertWindToMetric } from "../utils/unit-conversion/convert-wind-to-metric";
import { convertWindToImperial } from "../utils/unit-conversion/convert-wind-to-imperial";

export class CurrentWeather {
  constructor(
    currentTemp,
    lowTemp,
    highTemp,
    status,
    statusDescription,
    humidity,
    wind,
    id
  ) {
    this.currentTemp = currentTemp;
    this.lowTemp = lowTemp;
    this.highTemp = highTemp;
    this.status = status;
    this.statusDescription = statusDescription;
    this.humidity = humidity;
    this.wind = wind;
    this.id = id;
  }

  setToMetric() {
    this.currentTemp = convertTempToMetric(this.currentTemp);
    this.lowTemp = convertTempToMetric(this.lowTemp);
    this.highTemp = convertTempToMetric(this.highTemp);
    this.wind = convertWindToMetric(this.wind);
  }

  setToImperial() {
    this.currentTemp = convertTempToImperial(this.currentTemp);
    this.lowTemp = convertTempToImperial(this.lowTemp);
    this.highTemp = convertTempToImperial(this.highTemp);
    this.wind = convertWindToImperial(this.wind);
  }
}
