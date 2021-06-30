import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import {Container, Form, FormControl, Button} from 'react-bootstrap';
import backgroundImage from '../images/background.jpg'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {LinkContainer} from'react-router-bootstrap';

import Footer from './Footer';
import Weatherforecast from './Weatherforecast';

const Frontpage = () => {
  const [city, setCity] = useState('');

    const cityHandler = (e) => {
    e.preventDefault();
    setCity(e.target.value);
    };

    const searchCity = () => { 
        console.log(city)
      };
  return (
    <div className="pageContainer" style={{backgroundImage:`url(${backgroundImage})`,backgroundSize: "cover"}}>
      <Container fluid className="weather">
        
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => cityHandler(e)} />
              <Link to="/weatherforecast" onClick={searchCity} >Search</Link>
            </Form>
        
      </Container>
    </div>
  );
}

export default Frontpage;
