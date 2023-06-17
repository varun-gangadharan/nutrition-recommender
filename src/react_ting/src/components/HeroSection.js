import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Card, Popover, OverlayTrigger } from 'react-bootstrap';
import yummyImg from './yummy.jpg';

function HeroSection() {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Popover Title</Popover.Title>
            <Popover.Content>
                This is the popover content
            </Popover.Content>
        </Popover>
    );

    return (
        <Carousel autoPlay infiniteLoop useKeyboardArrows dynamicHeight showThumbs={false} showStatus={false}>
            <div className="hero-card">
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <Card>
                        <Card.Img variant="top" src={yummyImg} className="hero-image"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </OverlayTrigger>
            </div>
        </Carousel>
    );
}

export default HeroSection;
