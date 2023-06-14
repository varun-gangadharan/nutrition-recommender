import { Button, Select } from 'antd';
import React from 'react';

const SaveLoad = () => {
    const { Option } = Select;

    return (
      <>
        <Button type="primary">Save Plan</Button>
        <Select placeholder="Select a meal plan to load">
          <Option value="plan1">Meal Plan 1</Option>
          <Option value="plan2">Meal Plan 2</Option>
        </Select>
      </>
    );
}

export default SaveLoad;
