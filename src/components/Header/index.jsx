import React from 'react';
import Filters from '../Filters';
import Search from '../Search';
import './Header.css';

const Header = () => {
  const pageCondition = !true;

  return (
    <div className='header__container'>
      <h1 className='header__title'>READER</h1>
      {pageCondition && <Search />}
      {pageCondition && <Filters />}
      <hr className='header__border'/>
    </div>
  )
}

export default Header