import React, { useEffect, useState } from 'react';
import { fetchDetails } from '../../utils/apiServices';
import './Detail.css';

const Detail = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchDetails();
      setData(response);
    }
    fetchData();
  }, [])

  return (
    <div className='detail__container'>
      <h1 className='detail__heading'>{data?.heading}</h1>
      <div className='detail__metadata'>
        <span className='detail__tag'>{data?.label}</span>
        <span className='detail__date'>{data?.date}</span>
      </div>
      <p className='detail__description'>
        <div dangerouslySetInnerHTML={{ __html: data?.rawHTML}}></div>
      </p>
    </div>
  )
}

export default Detail