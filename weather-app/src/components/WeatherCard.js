import React, {useContext} from 'react';
import {Card} from 'react-bootstrap';
import sunny from '../images/sunny.svg' 

import WeatherContext from '../contexts/weatherContext';

const WeatherCard = () => {
    const weatherContext = useContext(WeatherContext);
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const every8th = weatherContext.every8th;
    console.log(every8th);

    return(
        <div id="cardContainer">
            {every8th.map((item) => (
                <Card className="bg-dark text-white" >
                    <Card.Img src={sunny} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>{Math.round(item.main.temp)}</Card.Title>
                        <Card.Text>
                        This is weather
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            ))}
        </div>
    );
}

export default WeatherCard;