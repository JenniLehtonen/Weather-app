import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import {Container} from 'react-bootstrap';
import Search from './components/Search'
import CurrentWeather from './components/CurrentWeather'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Container fluid>
       Weather app
      </Container>
      <Container fluid className="weather">
        <Search />
        <CurrentWeather />
      </Container>
    </div>
  );
}

export default App;
