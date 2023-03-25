import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ListItem from '../components/ListItem'
import { fetchLabels, fetchList } from '../utils/apiServices';

const List = () => {
  const [filtersArr, setFiltersArr] = useState([]);
  const [selected, setSelected] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const checkFiltersArr = JSON.parse(localStorage.getItem('filtersArr'));
      if(checkFiltersArr) {
        setFiltersArr(checkFiltersArr);
        setSelected(checkFiltersArr?.[0]);
        return;
      }

      const newFiltersArr = await fetchLabels();
      setFiltersArr(newFiltersArr);
      setSelected(newFiltersArr?.[0]?.id);
      localStorage.setItem('filtersArr', JSON.stringify(newFiltersArr));
    }
    fetchData();
  }, []);

  useEffect(() => {
    if(selected)
      fetchList(selected.id).then(res => setData(res));
  }, [selected]);

  return (
    <div>
      <Header filtersArr={filtersArr} selected={selected} setSelected={setSelected} />
      {
        data.map(d => (
          <ListItem {...d} category={selected} key={d.id} />
        ))
      }
    </div>
  )
}

export default List