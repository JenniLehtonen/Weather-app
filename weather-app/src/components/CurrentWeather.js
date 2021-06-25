import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import logo from '../images/sunny.svg'

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
        var temperature = (current[0].main.temp-273.15).toString().slice(0,4);
        var temperatureFeelsLike = (current[0].main.feels_like-273.15).toString().slice(0,4);
        var humidity = current[0].main.humidity;
        var descriptionOfWeather = current[0].weather[0].description;
        var wind = current[0].wind.speed;
        
        console.log(current);

    return(
        <div className="currentWeather">
            <h1>Current weather in {city}</h1>
        
            <Row>
                <Col>{temperature}<br />
                {descriptionOfWeather}<br />
                <img src={logo} className="image" />
                </Col>
                <Col xs={5}>{humidity}<br />
                {wind}<br />
                {temperatureFeelsLike}
                </Col>
            </Row>
        </div>
    )
}

export default CurrentWeather;