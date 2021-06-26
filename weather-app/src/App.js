import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import {Container} from 'react-bootstrap';
import Search from './components/Search'
import CurrentWeather from './components/CurrentWeather'
import WeatherCard from './components/WeatherCard'

import './App.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="pageContainer">
      <Container fluid>
       <h1>Weather app</h1>
      </Container>
      <Container fluid className="weather">
        <Search />
        <CurrentWeather />
      </Container>
      <Container fluid className="weathercards">
        <WeatherCard />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
