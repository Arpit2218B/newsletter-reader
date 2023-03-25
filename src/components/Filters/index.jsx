import React, { useEffect, useState } from 'react';
import { fetchLabels } from '../../utils/apiServices';
import './Filters.css';

const Filters = () => {
  const [filtersArr, setFiltersArr] = useState([]);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const newFiltersArr = await fetchLabels();
      setFiltersArr(newFiltersArr);
      setSelected(newFiltersArr?.[0]);
    }
    fetchData();
  }, []);

  return (
    <div className='filter__container'>
      {
        filtersArr.map((ele, index) => (
          <span 
          key={index} 
          className={`filter__element ${ele === selected ? 'filter__selected':  ''}`}>
            {ele}
          </span>
        ))
      }
    </div>
  )
}

export default Filters