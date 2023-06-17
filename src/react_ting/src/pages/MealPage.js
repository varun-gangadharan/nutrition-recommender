import React, { useState, useEffect } from 'react';
import NumRecipesSelector from '../components/NumRecipesSelector';
import Filter from '../components/Filter';
import SearchComponent from '../components/Search';
import MealShowcase from '../components/MealShowcase';
import data from '../components/data.json'; 
import './MealPage.css'; 

function getRandom(arr, n, filterSettings) {
  let filteredArr = arr;
  
  // Apply the filter settings
  if(filterSettings.mealType) {
    filteredArr = filteredArr.filter(meal => filterSettings.mealType.includes(meal.type));
  }
  if(filterSettings.dietaryPreference) {
    filteredArr = filteredArr.filter(meal => filterSettings.dietaryPreference.includes(meal.diet));
  }

  let result = new Set();
  while(result.size < n && result.size < filteredArr.length) {
    result.add(filteredArr[Math.floor(Math.random() * filteredArr.length)]);
  }

  // Return empty array if no meals match the filter settings
  if (filteredArr.length === 0) {
    return [];
  }

  return [...result];
}

function MealPage() {
  const [numMeals, setNumMeals] = useState(4);
  const [filterSettings, setFilterSettings] = useState({});
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  let filteredData = data;
  if (searchTerm) {
    filteredData = filteredData.filter(meal =>
      meal.title && meal.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  useEffect(() => {
    setSelectedMeals(getRandom(filteredData, numMeals, filterSettings));
  }, [numMeals, filterSettings, searchTerm]);

  return (
    <div className="mealPageContainer">
      <SearchComponent setSearchTerm={setSearchTerm} />
      <NumRecipesSelector setNumMeals={setNumMeals} />
      <Filter setFilterSettings={setFilterSettings} />
      <MealShowcase meals={selectedMeals} />
    </div>
  );
}

export default MealPage;
