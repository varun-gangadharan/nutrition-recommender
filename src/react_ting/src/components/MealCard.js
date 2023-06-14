import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';

function MealCard({ meal }) {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <Card onClick={handleClick} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={meal.image} />
          <Card.Body>
            <Card.Title>{meal.title}</Card.Title>
          </Card.Body>
        </Card>
  
        <Card onClick={handleClick} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{meal.title}</Card.Title>
            <Card.Text>
              {/* Here you can add more meal info if it's available */}
              Click for more information.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </ReactCardFlip>
    );
  }
  

export default MealCard;
