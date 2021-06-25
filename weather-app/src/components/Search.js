import React, {useState} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

const Search = () => {
    const [city, setCity] = useState('');

    const cityHandler = (e) => {
    e.preventDefault();
    setCity(e.target.value);
    };

    const searchCity = () => { 
        console.log(city)
      };

    return(
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => cityHandler(e)} />
          <Button variant="outline-info" onClick={searchCity} >Search</Button>
        </Form>
    )
}

export default Search;