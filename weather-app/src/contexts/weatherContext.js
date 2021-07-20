  
import React from 'react';

const WeatherContext = React.createContext({
    city: null,
    temperature: null,
    temperatureFeelsLike: null,
    humidity: null,
    descriptionOfWeather: null,
    clouds: null,
    wind: null,
    every8th: null,
    setWeatherVariables: () => {},
});

export default WeatherContext