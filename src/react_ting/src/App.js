import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import data from './data.json';

import NavigationBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Quiz from './components/Quiz'; // Make sure the path is correct
import MealShowcase from './components/MealShowcase';
import Footer from './components/Footer';
import SearchComponent from './components/Search';
import Filter from './components/Filter';
import NumRecipesSelector from './components/NumRecipesSelector';
import SaveLoad from './components/SaveLoad';
import Chart from './components/Chart';

const meals = [
  {
    name: 'Meal 1',
    image: 'https://via.placeholder.com/150',
    description: 'This is a description of meal 1.',
  },
  {
    name: 'Meal 2',
    image: 'https://via.placeholder.com/150',
    description: 'This is a description of meal 2.',
  },
  // Add more meals as needed
];

function getRandom(arr, n) {
  let result = new Set();
  while(result.size < n) {
      result.add(arr[Math.floor(Math.random() * arr.length)]);
  }
  return [...result];
}

function App() {
  return (
      <div className="App">
          <NavigationBar />
          <HeroSection />
          <SearchComponent />
          <Filter />
          <NumRecipesSelector />
          <MealShowcase meals={getRandom(data, 4)} />
          <Quiz />
          <SaveLoad />
          <Chart />
          <Footer />
      </div>
  );
}


export default App;
