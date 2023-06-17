import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchComponent = ({ setSearchTerm }) => (
    <Search
      placeholder="Search by recipe name or ingredients"
      enterButton
      onSearch={value => setSearchTerm(value)}
    />
  );
  

export default SearchComponent;
