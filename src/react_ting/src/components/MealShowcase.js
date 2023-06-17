import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MealCard from './MealCard';

function MealShowcase({ meals }) {
  return (
    <Container fluid>
      <Row>
        {meals.length > 0 ? meals.map((meal) => (
          <Col xs={12} sm={6} md={4} lg={3} key={meal.id}>
            <MealCard meal={meal} />
          </Col>
        )) : <Col><p>No meals match your filter settings.</p></Col>}
      </Row>
    </Container>
  );
}
  

export default MealShowcase;
