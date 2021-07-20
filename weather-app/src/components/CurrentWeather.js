import React, {useContext} from 'react';
import Search from './Search';

import sunny from '../images/sunny.svg';
import humidityImage from '../images/humidity.svg';
import windImage from '../images/wind.svg';
import cloudImage from '../images/cloud.svg';

import WeatherContext from '../contexts/weatherContext';

const CurrentWeather = () => {
  const weatherContext = useContext(WeatherContext);

  //Change the temperatures from Kelvins to Celsius
  var temperature = Math.round(weatherContext.temperature);

  //DO I NEED TEMPERATUREFEELSLIKE, CHECK ALSO FRONTPAGE COMMENT
  var temperatureFeelsLike = (weatherContext.temperatureFeelsLike-273.15).toString().split(".")[0];

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
                <img src={sunny} className="currentWeatherImage" alt="sun icon" />
            </div>
        </div>
    );
}

export default CurrentWeather;