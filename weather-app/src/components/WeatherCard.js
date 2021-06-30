import React from 'react';
import {Card} from 'react-bootstrap';
import testImage from '../images/testImage.jpg'

const WeatherCard = () => {
    const numbers = ["1", "2", "3", "4", "5"];


    return(
        <div id="cardContainer">
            {numbers.map((number, index) => (
                <Card className="bg-dark text-white" key={index}>
                    <Card.Img src={testImage} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>{number}</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content.
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            ))}
        </div>
    );
}

export default WeatherCard;