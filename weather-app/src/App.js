import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import {Container, Form, FormControl, Button} from 'react-bootstrap';
import backgroundImage from './images/background.jpg'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {LinkContainer} from'react-router-bootstrap';

import './App.css';
import Frontpage from './components/Frontpage';
import Footer from './components/Footer';
import Weatherforecast from './components/Weatherforecast';

const App = () => {
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
      <Container fluid>
       <h1>Weather app</h1>
      </Container>
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
    </div>
  );
}

export default App;
