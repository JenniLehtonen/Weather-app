import React, {useState, useEffect, useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import {Container, Form, FormControl} from 'react-bootstrap';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import WeatherContext from '../contexts/weatherContext';

const Frontpage = () => {
  const weatherContext = useContext(WeatherContext);
  const [city, setCity] = useState('');
  const [result, setResult] = useState({});

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`;

    // Side effect
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setResult(data));
    }, [url]);
    console.log(result);

    const searchWeather = () => { 
        var test1 ="test1";
        var test2 ="test2";
        weatherContext.setWeatherVariables(test1, test2);
      };

  return (
      <Container fluid className="weather">
        
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => setCity(e.target.value)} />
              <Link to="/weatherforecast" onClick={searchWeather} >Search</Link>
            </Form>
        
      </Container>
  );
}

export default Frontpage;
