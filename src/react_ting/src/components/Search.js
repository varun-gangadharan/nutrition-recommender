import React from 'react';
import { Input } from 'antd';
import styles from './Search.css';

const { Search } = Input;

const SearchComponent = ({ setSearchTerm }) => (
    <div className={styles['search-container']}>
        <Search
          className={styles['search-input']}
          placeholder="Search by recipe name or ingredients"
          enterButton
          onSearch={value => setSearchTerm(value)}
        />
    </div>
);

export default SearchComponent;
