import React, {useState, useContext, useEffect} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import WeatherContext from '../contexts/weatherContext';
import search from '../images/search.svg'

const Search = () => {
  const weatherContext = useContext(WeatherContext);
  const [city, setCity] = useState('');
  const [result, setResult] = useState({});

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&`;

  /*
  useEffect(() => { //Get data from openweathermap
    fetch(url)
    .then((res) => res.json())
    .then((data) => setResult(data));
  }, [url]);
  console.log(result);*/

  const searchWeather = () => { //Send the picked results to context
    weatherContext.setWeatherVariables(result.name, result.main.temp, result.main.feels_like, result.main.humidity, result.weather[0].description, result.wind.speed, result.clouds.all);
  };
  
    return(
      <Form inline>
      <FormControl type="text" placeholder="Search for a city" className="mr-sm-2" onChange={(e) => setCity(e.target.value)} />
      <Button onClick={searchWeather}><img src={search} className="image" alt="search icon" /></Button>
    </Form>
    );
}

export default Search;