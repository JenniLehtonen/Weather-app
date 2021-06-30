import React, {useState} from 'react';
import sunny from '../images/sunny.svg'
import humidityImage from '../images/humidity.svg'
import windImage from '../images/wind.svg'
import cloudImage from '../images/cloud.svg'

const CurrentWeather = () => {
    const [current, setCurrent] = useState([{
        "coord": {
          "lon": -122.08,
          "lat": 37.39
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 282.55,
          "feels_like": 281.86,
          "temp_min": 280.37,
          "temp_max": 284.26,
          "pressure": 1023,
          "humidity": 100
        },
        "visibility": 16093,
        "wind": {
          "speed": 1.5,
          "deg": 350
        },
        "clouds": {
          "all": 1
        },
        "dt": 1560350645,
        "sys": {
          "type": 1,
          "id": 5122,
          "message": 0.0139,
          "country": "US",
          "sunrise": 1560343627,
          "sunset": 1560396563
        },
        "timezone": -25200,
        "id": 420006353,
        "name": "Mountain View",
        "cod": 200
        }         ]);

        var city = current[0].name;
        var temperature = (current[0].main.temp-273.15).toString().split(".")[0];
        var temperatureFeelsLike = (current[0].main.feels_like-273.15).toString().split(".")[0];
        var humidity = current[0].main.humidity;
        var descriptionOfWeather = current[0].weather[0].description;
        var wind = current[0].wind.speed;
        var clouds = current[0].clouds.all;
        
        console.log(current);

    return(
        <div className="currentWeather">
            <h2>Current weather in {city}</h2>
            <div id="weatherMoreDetails">
              <div><img src={humidityImage} className="image" alt="humidity icon" />{humidity} %</div>
              <div><img src={windImage} className="image" alt="wind icon" />{wind} m/s</div>
              <div><img src={cloudImage} className="image" alt="cloud icon" />{clouds} %{temperatureFeelsLike}</div>
            </div>
            <div id="weatherTemperature">
                <h1>{temperature} °C</h1><br />
                <h2>{descriptionOfWeather}</h2><br />
                <img src={sunny} className="image" alt="sun icon" />
            </div>
        </div>
    );
}

export default CurrentWeather;