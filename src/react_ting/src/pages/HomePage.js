import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <div className="content-section">
        {/* Introduction */}
        <Container className="intro-section p-5 mb-3 rounded">
          <h1>Welcome to Foodie's Paradise</h1>
          <p>
            Discover new recipes, find inspiration for your next meal, and take fun quizzes to test your food knowledge.
            Whether you're a seasoned chef or just starting out, there's something here for every food lover.
          </p>
        </Container>

        {/* Quick Access Buttons */}
        <div className="quick-access">
          <Button variant="primary" href="/meals" size="lg" className="access-btn">Get some inspiration!</Button>
          <Button variant="secondary" href="/quiz" size="lg" className="access-btn">Take Quiz</Button>
        </div>

        {/* About Us */}
        <Container className="about-section p-5 mb-3 rounded">
          <h1>About Us</h1>
          <p>
            Made by a food enthusiast committed to bringing you the best culinary experience right at your fingertips. My passion for food and health led to the creation of Foodie's Paradise.
          </p>
        </Container>
      </div>
    </div>
  );
}

export default HomePage;
