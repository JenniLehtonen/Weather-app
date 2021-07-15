import React from 'react';
import {Card} from 'react-bootstrap';
import sunny from '../images/sunny.svg' 

const WeatherCard = () => {
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return(
        <div id="cardContainer">
            {weekdays.map((day, index) => (
                <Card className="bg-dark text-white" key={index}>
                    <Card.Img src={sunny} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>{day}</Card.Title>
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