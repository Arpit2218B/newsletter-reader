import React from 'react';
import SearchIcon from './SearchIcon';
import './Search.css';

const Search = () => {
  return (
    <div className='search__container'>
      <input 
      className='search__input'
      placeholder='Search newsletter'
      />
      <div className='search__icon'>
        <SearchIcon />
      </div>
    </div>
  )
}

export default Search