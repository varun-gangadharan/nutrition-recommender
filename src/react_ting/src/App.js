import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MealPage from './pages/MealPage';
import QuizPage from './pages/QuizPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="site">
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/meals" element={<MealPage />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
