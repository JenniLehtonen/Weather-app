import React, {useState, useEffect, useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import {Container, Form, FormControl} from 'react-bootstrap';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import WeatherContext from '../contexts/weatherContext';
import search from '../images/search.svg'

const Frontpage = () => {
  const weatherContext = useContext(WeatherContext);
  const [city, setCity] = useState('');
  const [result, setResult] = useState({});

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&`;

    useEffect(() => { //Get data from openweathermap
        fetch(url)
        .then((res) => res.json())
        .then((data) => setResult(data));
    }, [url]);
    console.log(result);

    const searchWeather = () => { //Send the picked results to context
        weatherContext.setWeatherVariables(result.name, result.main.temp, result.main.feels_like, result.main.humidity, result.weather[0].description, result.wind.speed, result.clouds.all);
      }; //DO I NEED TEMPERATURE FEELS LIKE?

  return (
      <Container fluid className="weather">
        <h4>Let's find some weather info</h4><br />
            <Form inline>
              <FormControl type="text" placeholder="Search for a city" className="mr-sm-2" onChange={(e) => setCity(e.target.value)} />
              <Link to="/weatherforecast" onClick={searchWeather} ><img src={search} className="image" alt="search icon" /></Link>
            </Form>
      </Container>
  );
}

export default Frontpage;
