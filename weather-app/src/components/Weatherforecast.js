import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import {Container} from 'react-bootstrap';
import CurrentWeather from './CurrentWeather'
import WeatherCard from './WeatherCard'

const Weatherforecast = () => {
  return (
      <>
      <Container className="weather2">
        <CurrentWeather />
        <WeatherCard />
      </Container>
      </>
  );
}

export default Weatherforecast;