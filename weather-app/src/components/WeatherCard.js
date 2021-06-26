import React from 'react';
import {Card, Container, Col, Row} from 'react-bootstrap';
import testImage from '../images/testImage.jpg'

const WeatherCard = () => {
    const numbers = ["1", "2", "3", "4", "5"];


    return(
        <>
        <Container>
            <Row>
                {numbers.map((number) => (
          
                  <Col xs={3}>
                    <Card className="bg-dark text-white">
                        <Card.Img src={testImage} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>{number}</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                  </Col>
                ))}
            </Row>
        </Container>
          
    
    </>
    );
}

export default WeatherCard;