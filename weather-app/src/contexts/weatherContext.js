  
import React from 'react';

const WeatherContext = React.createContext({
    city: null,
    temperature: null,
    humidity: null,
    descriptionOfWeather: null,
    clouds: null,
    wind: null,
    icon: null,
    every8th: null,
    setWeatherVariables: () => {},
});

export default WeatherContext