export class CurrentWeather {
  constructor(currentTemp, status, minTemp, maxTemp, humidity, wind) {
    this.currentTemp = currentTemp;
    this.minTemp = minTemp;
    this.maxTemp = maxTemp;
    this.status = status;
    this.humidity = humidity;
    this.wind = wind;
  }

  // Function that calls all celsius converts
  // name , setToImperial
  //example: currentTemp = (converter function that takes in the current temp. )
  // repeat this step for the other properties.
  //the whole idea is to let the class contorl all this.

  setToMetric() {
    // Call method that converts temp to celcius, for current, min, and max,
    // Convert humidty value to metric
    // Call function to change mph to km/hr
  }

  setToImperial() {
    // Call function that converst too temps to fahrenheight.
    // Convert humity to imperial
    // Convert km/hr to mph.
  }

  //Function to calls all fareheight converts.
  // Same as one above, but for USA USA.
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

  getWeatherProperties() {
    return {
      currentTemp: this.currentTemp,
      minTemp: this.minTemp,
      maxTemp: this.maxTemp,
      status: this.status,
      humidity: this.humidity,
      wind: this.wind,
    };
  }
}
