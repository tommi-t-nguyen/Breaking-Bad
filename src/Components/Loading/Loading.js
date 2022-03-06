import React from 'react';
import spinner from '../../images/spinner.gif';
import './Loading.css';

const Loading = () => {
  return (
    <img className='loading' src={spinner} alt='Loading...'/>
  )
}

export default Loading
