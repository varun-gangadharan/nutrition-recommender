import { Checkbox } from 'antd';
import React from 'react';

const Filter = ({ setFilterSettings }) => {
  const onChangeMealType = checkedValues => setFilterSettings(settings => ({ ...settings, mealType: checkedValues }));
  const onChangeDietaryPreference = checkedValues => setFilterSettings(settings => ({ ...settings, dietaryPreference: checkedValues }));

  return (
    <>
      <h3>Filter by meal type:</h3>
      <Checkbox.Group style={{ width: '100%' }} onChange={onChangeMealType}>
        <Checkbox value="Breakfast">Breakfast</Checkbox>
        <Checkbox value="Lunch">Lunch</Checkbox>
        <Checkbox value="Dinner">Dinner</Checkbox>
      </Checkbox.Group>
      <h3>Filter by dietary preference:</h3>
      <Checkbox.Group style={{ width: '100%' }} onChange={onChangeDietaryPreference}>
        <Checkbox value="Vegetarian">Vegetarian</Checkbox>
        <Checkbox value="Vegan">Vegan</Checkbox>
        <Checkbox value="Gluten-free">Gluten-free</Checkbox>
      </Checkbox.Group>
    </>
  );
};


export default Filter;
