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
  const [fetchMoreloading, setFetchMoreLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState();

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
        setData(res.data);
        setNextPageToken(res.nextToken);
        setLoading(false);
      });
  }, [selected]);

  const fetchMoreData = () => {
    setFetchMoreLoading(true);
    fetchList(selected.id, nextPageToken).then(res => {
      setData((data) => [...data, ...res.data]);
      setNextPageToken(res.nextToken);
      setFetchMoreLoading(false);
    });
  }

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
      <div className='list__loadMoreContainer'>
        {nextPageToken && !loading && <button onClick={fetchMoreData} disabled={fetchMoreloading} className="list__loadMore">{fetchMoreloading ? 'Loading...' : 'Load more'}</button>}
      </div>
    </div>
  )
}

export default List