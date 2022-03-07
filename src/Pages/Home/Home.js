import React, { useState, useEffect} from 'react';
import { fetchAll } from '../../apiCalls.js';
import Nav from '../../Components/Nav/Nav.js';
import SearchBar from '../../Components/SearchBar/SearchBar.js';
import Footer from '../../Components/Footer/Footer.js';
import Loading from '../../Components/Loading/Loading.js';


const Home = () => {
  const [characters, setCharacters] = useState('');
  const [error,setError] = useState(false);

  useEffect(()=> {
    fetchAll()
      .then(data => setCharacters(data))
      .catch(error => setError(true))
  }, []);
  return (
    <>
    <Nav />
    {!characters ? (<Loading />) : (<SearchBar characters={characters} />)}
    <Footer />
   </>
  )
}

export default Home
