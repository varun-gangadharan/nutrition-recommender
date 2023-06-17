import React from 'react';
import HeroSection from '../components/HeroSection';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <HeroSection />
      {/* Any other components you want on the home page */}
    </div>
  );
}

export default HomePage;
