import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';  // Ensure the styles are imported too
import { Card, Popover, OverlayTrigger } from 'react-bootstrap';

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
        <Carousel autoPlay infiniteLoop useKeyboardArrows dynamicHeight>
            <div>
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="your-image-url" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </OverlayTrigger>
            </div>
            {/* Add more slides as needed */}
        </Carousel>
    );
}

function handleClick() {
    console.log('Card was clicked!');
  }
  

export default HeroSection;
