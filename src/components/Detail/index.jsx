import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { fetchDetails } from '../../utils/apiServices';
import './Detail.css';

const Detail = () => {
  const [data, setData] = useState({});
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      const splitPath = location.search.split('&')
      const id = splitPath[0].split('=')[1];
      const category = splitPath[1].split('=')[1];
      const response = await fetchDetails(id, category);
      setData(response);
    }
    fetchData();
  }, [])

  return (
    <div className='detail__container'>
      <h1 className='detail__heading'>{data?.heading}</h1>
      <div className='detail__metadata'>
        <span className='detail__tag'>{decodeURI(data?.label?.split('Newsletters/')[1] || '')}</span>
        <span className='detail__date'>{data?.date}</span>
      </div>
      <p className='detail__description'>
        <div dangerouslySetInnerHTML={{ __html: data?.rawHTML}}></div>
      </p>
    </div>
  )
}

export default Detail