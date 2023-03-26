import React from 'react';
import { useLocation } from 'react-router-dom';
import { logout } from '../../utils/helper';
import Filters from '../Filters';
import Search from '../Search';
import './Header.css';

const Header = ({ filtersArr, selected, setSelected }) => {
  const location = useLocation();
  const pageCondition = location.pathname !== '/detail';

  return (
    <div className='header__container'>
      <div className='header__titleContainer'>
        <h1 className='header__title'>READER</h1>
        <span className='header__logout' onClick={logout}>LOGOUT</span>
      </div>
      {/* {pageCondition && <Search />} */}
      {pageCondition && <Filters filtersArr={filtersArr} selected={selected} setSelected={setSelected} />}
      <hr className='header__border'/>
    </div>
  )
}

export default Header