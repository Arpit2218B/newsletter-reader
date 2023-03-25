import React from 'react';
import './Filters.css';

const Filters = ({ filtersArr, selected, setSelected }) => {
  return (
    <div className='filter__container'>
      {
        filtersArr.map((ele, index) => (
          <span
          onClick={() => setSelected(ele.id)}
          key={index} 
          className={`filter__element ${ele.id === selected ? 'filter__selected':  ''}`}>
            {ele.filterName}
          </span>
        ))
      }
    </div>
  )
}

export default Filters