import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import {Container} from 'react-bootstrap';
import Search from './Search'
import CurrentWeather from './CurrentWeather'
import WeatherCard from './WeatherCard'

const Weatherforecast = () => {
  return (
      <>
      <Container fluid className="weather">
        <Search />
        <CurrentWeather />
      </Container>
      <Container fluid className="weathercards">
        <WeatherCard />
      </Container>
      </>
  );
}

export default Weatherforecast;