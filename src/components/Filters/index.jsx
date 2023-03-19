import React from 'react';
import './Filters.css';

const arr = [
  'Tech',
  'Programming',
  'Football',
  'Science',
  'Cooking',
  'Miscellaneous',
];

const Filters = () => {
  const SELECTED_FILTER = 'Tech';

  return (
    <div className='filter__container'>
      {
        arr.map((ele, index) => (
          <span 
          key={index} 
          className={`filter__element ${ele === SELECTED_FILTER ? 'filter__selected':  ''}`}>
            {ele}
          </span>
        ))
      }
    </div>
  )
}

export default Filters