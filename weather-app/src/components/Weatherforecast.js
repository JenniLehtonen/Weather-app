import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import {Container} from 'react-bootstrap';
import Search from './Search'
import CurrentWeather from './CurrentWeather'
import WeatherCard from './WeatherCard'
import backgroundImage from '../images/background.jpg'

import Footer from './Footer';

const Weatherforecast = () => {
  return (
    <div className="pageContainer" style={{backgroundImage:`url(${backgroundImage})`,backgroundSize: "cover"}}>
      <Container fluid className="weather">
        <Search />
        <CurrentWeather />
      </Container>
      <Container fluid className="weathercards">
        <WeatherCard />
      </Container>
    </div>
  );
}

export default Weatherforecast;