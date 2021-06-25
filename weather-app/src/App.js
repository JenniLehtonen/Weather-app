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
      
      <Container fluid>
      Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </Container>
    </div>
  );
}

export default App;
