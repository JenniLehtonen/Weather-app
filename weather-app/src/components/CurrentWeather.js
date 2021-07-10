import React, {useContext} from 'react';
import sunny from '../images/sunny.svg'
import humidityImage from '../images/humidity.svg'
import windImage from '../images/wind.svg'
import cloudImage from '../images/cloud.svg'

import WeatherContext from '../contexts/weatherContext';

const CurrentWeather = () => {
  const weatherContext = useContext(WeatherContext);

  //Change the temperatures from Kelvins to Celsius
  var temperature = (weatherContext.temperature-273.15).toString().split(".")[0];
  var temperatureFeelsLike = (weatherContext.temperatureFeelsLike-273.15).toString().split(".")[0];
    return(
        <div className="currentWeather">
            <h2>Current weather in {weatherContext.city}</h2>
            <div id="weatherMoreDetails">
              <div><img src={humidityImage} className="image" alt="humidity icon" /><h3>{weatherContext.humidity} %</h3></div>
              <div><img src={windImage} className="image" alt="wind icon" />{weatherContext.wind} m/s</div>
              <div><img src={cloudImage} className="image" alt="cloud icon" />{weatherContext.clouds} %{temperatureFeelsLike}</div>
            </div>
            <div id="weatherTemperature">
                <h1>{temperature} °C</h1><br />
                <h2>{weatherContext.descriptionOfWeather}</h2><br />
                <img src={sunny} className="image" alt="sun icon" />
            </div>
        </div>
    );
}

export default CurrentWeather;