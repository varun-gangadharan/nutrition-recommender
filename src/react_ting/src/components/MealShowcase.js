import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MealCard from './MealCard';

function MealShowcase({ meals }) {
  return (
    <Container fluid style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {meals.length > 0 ? meals.map((meal) => (
        <div style={{margin: '15px'}} key={meal.id}>
          <MealCard meal={meal} />
        </div>
      )) : <Col><p>No meals match your filter settings.</p></Col>}
    </Container>
  );
}

export default MealShowcase;
