import React from 'react';
import GoogleButton from '../components/GoogleButton';
import './styles.css';

const Authentication = () => {
  return (
    <div className='auth__container'>
      <h1>
        READER
      </h1>
      <GoogleButton />
    </div>
  )
}

export default Authentication;