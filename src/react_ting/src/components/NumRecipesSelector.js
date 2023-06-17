import { Radio } from 'antd';
import React from 'react';

const NumRecipesSelector = ({ setNumMeals }) => {
    const onChange = e => setNumMeals(e.target.value);
  
    return <Radio.Group options={[3, 4, 5, 6, 7]} defaultValue={5} onChange={onChange} />;
  };

export default NumRecipesSelector;
