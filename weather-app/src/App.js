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
  const [humidity, setHumidity] = useState('');
  const [descriptionOfWeather, setDescriptionOfWeather] = useState('');
  const [main, setMain] = useState('');
  const [icon, setIcon] = useState('');
  const [clouds, setClouds] = useState('');
  const [wind, setWind] = useState('');
  const [every8th, setEvery8th] = useState({});

  const setWeatherVariables = useCallback((city, temperature, 
    humidity, descriptionOfWeather, main, icon, wind, clouds, every8th) => {
    setCity(city);
    setTemperature(temperature);
    setHumidity(humidity);
    setDescriptionOfWeather(descriptionOfWeather);
    setMain(main)
    setIcon(icon);
    setClouds(clouds);
    setWind(wind);
    setEvery8th(every8th);
  },[]);


  return (
    <>
    <div className="pageContainer" style={{ 
      backgroundImage: `url(${backgroundImage}`, backgroundRepeat: "no-repeat", backgroundSize: "cover" 
    }}>
        <header>
        <h1>Weather forecast</h1>
        </header>
        <div className="contentContainer">
          <WeatherContext.Provider value={{setWeatherVariables:setWeatherVariables,  
          city:city, temperature:temperature, humidity:humidity, descriptionOfWeather:descriptionOfWeather, main:main, 
          icon:icon, clouds:clouds, wind:wind, every8th:every8th}}>
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
