import { Radio } from 'antd';
import React from 'react';

const NumRecipesSelector = () => {
    return (
        <Radio.Group options={[3, 4, 5, 6, 7]} defaultValue={5} />
    );
}

export default NumRecipesSelector;
