import { convertTempToMetric } from "../utils/unit-conversion/convert-temp-to-metric";
import { convertTempToImperial } from "../utils/unit-conversion/convert-temp-to-imperial";

export class ForecastWeather {
  constructor(lowTemp, highTemp, outlook, id) {
    this.lowTemp = lowTemp;
    this.highTemp = highTemp;
    this.outlook = outlook;
    this.id = id;
  }

  setToMetric() {
    this.lowTemp = convertTempToMetric(this.lowTemp);
    this.highTemp = convertTempToMetric(this.highTemp);
  }

  setToImperial() {
    this.lowTemp = convertTempToImperial(this.lowTemp);
    this.highTemp = convertTempToImperial(this.highTemp);
  }
}
