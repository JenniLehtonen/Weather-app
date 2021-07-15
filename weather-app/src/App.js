import React, {useCallback, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import './styles/media-queries.css'
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import backgroundImage from './images/backgroundImage.jpg';

import './App.css';
import Frontpage from './components/Frontpage';
import Footer from './components/Footer';
import Weatherforecast from './components/Weatherforecast';
import WeatherContext from "./contexts/weatherContext";

const App = () => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [temperatureFeelsLike, setTemperatureFeelsLike] = useState('');
  const [humidity, setHumidity] = useState('');
  const [descriptionOfWeather, setDescriptionOfWeather] = useState('');
  const [clouds, setClouds] = useState('');
  const [wind, setWind] = useState('');

  const setWeatherVariables = useCallback((city, temperature, temperatureFeelsLike, 
    humidity, descriptionOfWeather, wind, clouds) => {
    setCity(city);
    setTemperature(temperature);
    setTemperatureFeelsLike(temperatureFeelsLike);
    setHumidity(humidity);
    setDescriptionOfWeather(descriptionOfWeather);
    setClouds(clouds);
    setWind(wind);
    console.log(temperature);
    console.log(temperatureFeelsLike);
    console.log(humidity);
    console.log(descriptionOfWeather);
    console.log(clouds);
    console.log(wind);
  },[]);


  return (
    <>
    <div className="pageContainer" style={{ 
      backgroundImage: `url(${backgroundImage}`, backgroundRepeat: "no-repeat", backgroundSize: "cover" 
    }}>
      <Container fluid>
        <h1>Weather forecast</h1>
        </Container>
        <div className="contentContainer">
          <WeatherContext.Provider value={{setWeatherVariables:setWeatherVariables,  
          city:city, temperature:temperature, temperatureFeelsLike:temperatureFeelsLike, 
          humidity:humidity, descriptionOfWeather:descriptionOfWeather, clouds:clouds, wind:wind}}>
              <Router>
                  <Switch>
                  <Route exact path="/">
                      <Frontpage />
                    </Route>
                    <Route exact path="/weatherforecast">
                      <Weatherforecast />
                    </Route>
                  </Switch>
              </Router>
            </WeatherContext.Provider>
        </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
