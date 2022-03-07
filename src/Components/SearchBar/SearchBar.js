import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CharactersContainer from '../CharactersContainer/CharactersContainer.js';
import Loading from '../Loading/Loading.js';
import './SearchBar.css';

const SearchBar = ({characters}) => {
  const [filter, setFilter] = useState('')
  const [filterCharacters, setFilterCharacters] = useState([])
  const [firstLoad,setfirstLoad] = useState(false)

  const handleChange = (event) => {
    event.preventDefault()
    const find = characters.filter((character) => {
      if(filter === '') {
        return character
      }else if (character.name.toLowerCase().includes(filter.toLowerCase())){
        return character
      }
    })
    setFilterCharacters(find)
    setfirstLoad(true)
  }
  return (
    <>
    <section className='search'>
      <form>
        <input
          type='text'
          className='search-bar'
          placeholder='Search characters...'
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      <input className='submit'type="submit" onClick={(event) => handleChange(event)}/>
      </form>
    </section>
    {!firstLoad ? (<CharactersContainer filtered ={characters}/>):(<CharactersContainer filtered ={filterCharacters}/>)}
    </>
  )
}

export default SearchBar;

SearchBar.propTypes = {
  characters: PropTypes.array.isRequired
};
