import React from 'react';
import { Input } from 'antd';

const SearchComponent = () => {
    return (
        <Input.Search placeholder="Search by recipe name or ingredients" enterButton />
    );
}

export default SearchComponent;
