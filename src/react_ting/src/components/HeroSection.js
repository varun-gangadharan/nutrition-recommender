import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Card, Button } from 'react-bootstrap';
import yummyImg from './yummy.jpg';

function HeroSection() {

    return (
        <Carousel autoPlay infiniteLoop useKeyboardArrows dynamicHeight showThumbs={false} showStatus={false}>
            <div className="hero-card">
                <Card>
                    <Card.Img variant="top" src={yummyImg} className="hero-image"/>
                    <Card.Body>
                        <Button variant="primary" href="/meal-inspiration">Get Inspired</Button>
                        <Button variant="secondary" href="/quiz">Take Quiz</Button>
                    </Card.Body>
                </Card>,.   
            </div>
        </Carousel>
    );
}

export default HeroSection;
