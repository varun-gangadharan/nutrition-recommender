import React from 'react';

const MealCard = ({meal}) => {
    return (
        <div className="meal-card">
            <img src={meal.image} alt={meal.name}/>
            <h3>{meal.name}</h3>
            <p>{meal.description}</p>
        </div>
    );
}

export default MealCard;
