import React, {useContext} from 'react';
import Search from './Search';

import humidityImage from '../images/humidity.svg';
import windImage from '../images/wind.svg';
import cloudImage from '../images/cloud.svg';

import thunderstorm from '../images/thunderstorm.svg';
import drizzle from '../images/drizzle.svg';
import rain from '../images/rain.svg';
import snow from '../images/snow.svg';
import mist from '../images/mist.png';
import clear from '../images/clear.svg';
import clouds from '../images/clouds.svg';

import WeatherContext from '../contexts/weatherContext';

const CurrentWeather = () => {
  const weatherContext = useContext(WeatherContext);

  //Round the temperature
  var temperature = Math.round(weatherContext.temperature);

  var image;
  //Depending on the weather description, save different image to image variable
  if(weatherContext.main == "Rain"){
    image = rain
  } else if (weatherContext.main == "Clear"){
    image = clear
  } else if (weatherContext.main == "Thunderstorm"){
    image = thunderstorm
  } else if (weatherContext.main == "Drizzle"){
    image = drizzle
  } else if (weatherContext.main == "Snow"){
    image = snow
  } else if (weatherContext.main == "Clouds"){
    image = clouds
  } else if (weatherContext.main == "Mist" || weatherContext.main =="Smoke" || weatherContext.main == "Haze" || weatherContext.main == "Dust" || weatherContext.main == "Fog" || weatherContext.main == "Sand" || weatherContext.main == "Dust" || weatherContext.main == "Ash" || weatherContext.main == "Squall" || weatherContext.main == "Tornado"){
    image = mist
  }
  
    return(
        <div className="currentWeather">
          <Search/>
            <div id="weatherMoreDetails">
              <h3><img src={humidityImage} className="image" alt="humidity icon" />{weatherContext.humidity} %</h3>
              <h3><img src={windImage} className="image" alt="wind icon" />{weatherContext.wind} m/s</h3>
              <h3><img src={cloudImage} className="image" alt="cloud icon" />{weatherContext.clouds} %</h3>
            </div>
            <h2>{weatherContext.city}</h2>
            <div id="weatherTemperature">
                <h1>{temperature} °C</h1><br />
                <h3>{weatherContext.descriptionOfWeather}</h3><br />
                <img src={image} className="currentWeatherImage" alt="sun icon" />
            </div>
        </div>
    );
}

export default CurrentWeather;