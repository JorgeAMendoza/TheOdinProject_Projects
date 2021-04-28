import { getWeatherData } from "./utils/api-calls/get-weather-data";

export const weatherDOM = () => {
  let _weatherDataObject;
  let _currentUnit;
  //   Save current unit to localte storage, if nothing in local storage set default to imperial.
  //   object to hold all the DOM data needed (Possibly)

  const _displayErrorMessage = (errorMessage) => {
    // Grab the span in teh error componetn.
    // Sets its text to the error message passed in.
    // Give the error text component the class to display.
    // other file will handle what to do after 5 seconds
    // OR, set interval to have it disseapear in 5 seconds.
  };

  // function to start the program
  const startWeatherApp = async () => {
    const weatherData = await getWeatherData("dalas", "metric", "TX");
    console.log(weatherData);
    // Remove all html from the main page.
    // get back weather data and pass it into fucntion to create currnet weather card.
    // pass weather object into the forecat component to create arrays of componet HTML markup
    // write the content into the page, letting CSS handle animations.
  };

  // function to get and write new weather data
  const getNewWeather = async () => {
    // Fired through the form submiation event
    // Get data from the search bar input
    // Check to see there is no numbers, can either be just city, or city, (stateName)
    // If state name is over 2, any numbers, special characters, etc, fire off the dipslay error function and return/end function.
    // have everything "disspear from the screen" meaing set opacity to 0 and have the loading gif appear in the center of the main html. (NEED TO GO CSS AND DO THIS)
    // Remove the
    // pass into arguments into the weather api call, remember to pass in the metric or imperial unit
    // If there is an error/ we get a string, remove the gif, set the opacity back to 1, and call teh error fucntion with the error message passed in.
    // Call function to create current weather component
    // Call function to create the forecast components.
    // delete the previous html.
    // Remove the loading gif.
    // Write the new weather data html onto the page, let CSS handle the rest (KEY FRAMES NECESSARY?)
  };

  const changeWeatherUnits = () => {
    //  If the current unit value is imperial
    // then call the imperial method on teh current weather object and the forecast data (forecast will require iteration over the array)
    // If the current unit value is metric, then do the same process as above.
    // the dom here is dynamic so we have to keep grabbing it here.
    // Grab the main temp dom, set it to the new value in the object.
    // Grab the humidiy and wind and change those as well.
    // For wind, make sure to change the "mph" and "kmh" depending on the situation.
    // Grab all the forecast components.
    // iterate over the the DOM array.
    // In each iteration set its new values according to its values in the weather object.
    // regular for loop may be required.
    // End exeuction
  };

  //   Possibly here set all event listners, can also be in start weather app as well.
  // Logic for start weather can also be here as well.

  // Return only start, newWeather, changeUnit which to be called by api.
  return {
    startWeatherApp,
    getNewWeather,
    changeWeatherUnits,
  };
};
