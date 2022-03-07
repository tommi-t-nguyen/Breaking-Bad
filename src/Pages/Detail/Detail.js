import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { fetchSingle } from '../../apiCalls.js';
import { NavLink } from 'react-router-dom';
import './Detail.css';
import Loading from '../../Components/Loading/Loading.js'


const Detail = ({ id }) => {
  const [single,setSingle]=useState('')
  useEffect(()=> {
    fetchSingle(id)
      .then(data => setSingle(data))
      .catch(error => console.log(error))
  }, []);

  return (
    <>
    {!single ? (<Loading />) :(
    <div className='character-details'>
      <img className='char-image'src={single[0].img} alt={single[0].name}/>
      <div className='character-info'>
        <h1>{single[0].name}</h1>
        <p>Birthday: {single[0].birthday}</p>
        <p>Nickname: {single[0].nickname}</p>
        <p>Status: {single[0].status}</p>
        <p>Portrayed by: {single[0].portrayed}</p>
        <NavLink to='/'>
          <button className='home'> Home ↩</button>
        </NavLink>
      </div>
    </div>
  )}
    </>
  )
}

export default Detail;
Detail.propTypes = {
  id: PropTypes.string.isRequired
};
