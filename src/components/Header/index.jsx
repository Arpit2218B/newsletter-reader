import React from 'react';
import { useLocation } from 'react-router-dom';
import Filters from '../Filters';
import Search from '../Search';
import './Header.css';

const Header = ({ filtersArr, selected, setSelected }) => {
  const location = useLocation();
  const pageCondition = location.pathname !== '/detail';

  return (
    <div className='header__container'>
      <h1 className='header__title'>READER</h1>
      {/* {pageCondition && <Search />} */}
      {pageCondition && <Filters filtersArr={filtersArr} selected={selected} setSelected={setSelected} />}
      <hr className='header__border'/>
    </div>
  )
}

export default Header