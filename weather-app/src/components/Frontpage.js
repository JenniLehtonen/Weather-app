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

  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&`;

    useEffect(() => { //Get data from openweathermap
        fetch(url)
        .then((res) => res.json())
        .then((data) => setResult(data));
    }, [url]);

    console.log(result);
 

    const searchWeather = () => { //Send the picked results to context
        const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
        const every8th = every_nth(result.list, 8); //Get every 8th member of the list

        weatherContext.setWeatherVariables(result.city.name, result.list[0].main.temp, result.list[0].main.feels_like, result.list[0].main.humidity, result.list[0].weather[0].description, result.list[0].wind.speed, result.list[0].clouds.all, every8th);
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
