import React from 'react';
import { Link } from 'react-router-dom';
import './ListItem.css';

const ListItem = (props) => {
  return (
    <Link to={`detail?id=${props.id}&category=${props.category.name}`}>
      <div className='item__container'>
        <div className='item__image'>
          <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" />
        </div>
        <div className='item__data'>
          <p className='item__date'>{props.date}</p>
          <p className='item__heading'>{props.heading}</p>
          <p className='item__description'>{props.snippet}</p>
        </div>
      </div>
    </Link>
  )
}

export default ListItem