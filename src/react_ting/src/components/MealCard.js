import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import styles from './MealCard.module.css';

function MealCard({ meal }) {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <Card className={styles.card} onClick={handleClick}>
          <Card.Img variant="top" src={meal.image} className={styles["card-img-top"]}/>
          <Card.Body className={styles["card-body"]}>
              <Card.Title className={styles["card-title"]}>{meal.title}</Card.Title>
          </Card.Body>
      </Card>
  
        <Card className={styles.card} onClick={handleClick}>
          <Card.Body className={styles["card-body"]}>
            <Card.Title className={styles["card-title"]}>{meal.title}</Card.Title>
            <Card.Text className={styles["card-text"]}>
              Click for more information.
            </Card.Text>
            <Button variant="primary" className={styles["btn-primary"]}>Go somewhere</Button>
          </Card.Body>
        </Card>
      </ReactCardFlip>
    );
  }

export default MealCard;
