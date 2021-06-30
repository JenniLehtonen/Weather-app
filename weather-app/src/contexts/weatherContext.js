  
import React from 'react';

const WeatherContext = React.createContext({
    city: null,
    temperature: null,
    temperatureFeelsLike: null,
    humidity: null,
    descriptionOfWeather: null,
    clouds: null,
    wind: null, 
    setCity: () => {},
    setTemperature: () => {},
    setTemperatureFeelsLike: () => {},
    setHumidity: () => {},
    setDescriptionOfWeather: () => {},
    setClouds: () => {},
    setWind: () => {},
    setWeatherVariables: () => {},
});

export default WeatherContext