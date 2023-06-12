import React from 'react';
import styled from 'styled-components';

const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-right: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem;
`;

const NewsletterSignUp = () => {
  return (
    <SignUpWrapper>
      <Input type="email" placeholder="Enter your email..." />
      <Button>Subscribe</Button>
    </SignUpWrapper>
  );
};

export default NewsletterSignUp;
