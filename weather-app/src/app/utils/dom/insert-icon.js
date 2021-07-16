import partlyCloudyIcon from "../../../assets/weather-icons/cloudy-day.svg";
import cloudyIcon from "../../../assets/weather-icons/cloud.svg";
import rainIcon from "../../../assets/weather-icons/rain.svg";
import lightRainIcon from "../../../assets/weather-icons/light-rain.svg";
import snowIcon from "../../../assets/weather-icons/snow.svg";
import stormIcon from "../../../assets/weather-icons/storm-day.svg";
import sunIcon from "../../../assets/weather-icons/sun.svg";
import hazeIcon from "../../../assets/weather-icons/haze.svg";

export const insertIcon = (iconID) => {
  if (iconID >= 200 && iconID < 300) {
    return stormIcon;
  } else if (iconID >= 300 && iconID < 500) {
    return lightRainIcon;
  } else if (iconID >= 500 && iconID < 600) {
    return rainIcon;
  } else if (iconID >= 600 && iconID < 700) {
    return snowIcon;
  } else if (iconID >= 700 && iconID < 800) {
    return hazeIcon;
  } else if (iconID >= 800) {
    switch (iconID) {
      case 800:
        return sunIcon;
      case 801:
      case 802:
      case 803:
        return partlyCloudyIcon;
      case 804:
        return cloudyIcon;
    }
  }
};
