import React,{useState,useEffect} from 'react';
import { fetchSingle } from '../../apiCalls.js';


const Detail = ({ id }) => {
  const [single,setSingle]=useState([])

  useEffect(()=> {
    fetchSingle(id)
      .then(data => setSingle(data))
      .catch(error => console.log(error))
  }, []);
  return (
    <div>Detail</div>
  )
}

export default Detail
