import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ListItem from '../components/ListItem'
import { fetchLabels } from '../utils/apiServices';

const List = () => {
  const [filtersArr, setFiltersArr] = useState([]);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const checkFiltersArr = JSON.parse(localStorage.getItem('filtersArr'));
      if(checkFiltersArr) {
        setFiltersArr(checkFiltersArr);
        setSelected(checkFiltersArr?.[0]?.id);
        return;
      }

      const newFiltersArr = await fetchLabels();
      setFiltersArr(newFiltersArr);
      setSelected(newFiltersArr?.[0]?.id);
      localStorage.setItem('filtersArr', JSON.stringify(newFiltersArr));
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header filtersArr={filtersArr} selected={selected} setSelected={setSelected} />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  )
}

export default List