import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ListItem from '../components/ListItem'
import Loader from '../components/Loader'
import { fetchLabels, fetchList } from '../utils/apiServices';

const List = () => {
  const [filtersArr, setFiltersArr] = useState([]);
  const [selected, setSelected] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const newFiltersArr = await fetchLabels();
      setFiltersArr(newFiltersArr);
      setSelected(newFiltersArr?.[0]);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if(selected)
      setLoading(true);
      fetchList(selected.id).then(res => {
        setData(res);
        setLoading(false);
      });
  }, [selected]);

  return (
    <div>
      <Header filtersArr={filtersArr} selected={selected} setSelected={setSelected} />
      {loading && <Loader />}
      {
        !loading &&
        data.map(d => (
          <ListItem {...d} category={selected} key={d.id} />
        ))
      }
    </div>
  )
}

export default List