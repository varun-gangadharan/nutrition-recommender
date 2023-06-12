import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
  /* Add flipping animation here */
`;

const QuizCard = ({ question, options }) => {
  return (
    <Card>
      {/* Quiz question and options code */}
    </Card>
  );
};

export default QuizCard;
