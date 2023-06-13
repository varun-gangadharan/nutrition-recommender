import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import NavigationBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Quiz from './components/Quiz'; // Make sure the path is correct

function App() {
  return (
      <div className="App">
          <NavigationBar />
          <HeroSection />
          <Quiz /> // Quiz component
      </div>
  );
}

export default App;
