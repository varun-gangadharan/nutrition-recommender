import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MealCard from './MealCard';

function MealShowcase({ meals }) {
    return (
      <Container fluid>
        <Row>
          {meals.map((meal) => (
            <Col xs={12} sm={6} md={4} lg={3} key={meal.id}>
              <MealCard meal={meal} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  

export default MealShowcase;
