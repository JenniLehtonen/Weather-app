import React, {useState, useEffect, useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import {Container, Form, FormControl} from 'react-bootstrap';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import WeatherContext from '../contexts/weatherContext';
import search from '../images/search.svg'

import newYork from '../images/newYork.jpg';
import london from '../images/london.jpg';
import paris from '../images/paris.jpg';

const Frontpage = () => {
  const weatherContext = useContext(WeatherContext);
  const [city, setCity] = useState('');
  const [result, setResult] = useState({});

  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&`;

  useEffect(() => { //Get data from openweathermap
      fetch(url)
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, [url]);

  const searchWeather = () => { //Send the picked results to context
      const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
      const every8th = every_nth(result.list, 8); //Get every 8th member of the list

      weatherContext.setWeatherVariables(result.city.name, result.list[0].main.temp, result.list[0].main.humidity, result.list[0].weather[0].description, result.list[0].weather[0].icon, result.list[0].wind.speed, result.list[0].clouds.all, every8th);
    };

  const testi = (city1) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city1}&units=metric&`)
    .then(res => res.json()).then(data =>{
      setResult(data);
      console.log(data);
      setResult(data);
    })
  };
  /*
  const searchWeather = (result) => { //Send the picked results to context
    console.log(result);
    console.log(result.list);
      const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
      const every8th = every_nth(result.list, 8); //Get every 8th member of the list

      weatherContext.setWeatherVariables(result.city.name, result.list[0].main.temp, result.list[0].main.humidity, result.list[0].weather[0].description, result.list[0].weather[0].icon, result.list[0].wind.speed, result.list[0].clouds.all, every8th);
      console.log(weatherContext.every8th);
      history.replace('/weatherforecast');
    };

  const testi = (city1) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city1}&units=metric&`)
    .then(res => res.json()).then(data =>{
      searchWeather(data);
    })
  };*/

  return (
      <Container className="weather">
        <h4>Let's find some weather info</h4><br />
        <Form inline>
          <FormControl type="text" placeholder="Search for a city" className="mr-sm-2" onChange={(e) => setCity(e.target.value)} />
          <Link to="/weatherforecast" onClick={searchWeather} ><img src={search} className="image" alt="search icon" /></Link>
        </Form>
        <h4>Or check the weather in popular cities...</h4><br />
        <div id="cityContainer">
          <Link to="/weatherforecast"><button onMouseEnter={(e) => setCity("new york")} onClick={searchWeather}><h5>New York</h5><img src={newYork} alt="New York" /></button></Link>
          <Link to="/weatherforecast"><button onMouseEnter={(e) => setCity("london")} onClick={searchWeather}><h5>London</h5><img src={london} alt="London" /></button></Link>
          <Link to="/weatherforecast"><button onMouseEnter={(e) => setCity("paris")} onClick={searchWeather}><h5>Paris</h5><img src={paris} alt="Paris" /></button></Link>
        </div> 
      </Container>
  );
}

export default Frontpage;