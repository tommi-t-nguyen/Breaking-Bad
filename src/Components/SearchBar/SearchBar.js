import React, { useState } from 'react';
import CharactersContainer from '../CharactersContainer/CharactersContainer.js';
import Loading from '../Loading/Loading.js';

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
          autoFocus
        />
      <input type="submit" onClick={(event) => handleChange(event)}/>
      </form>
    </section>
    {!firstLoad ? (<CharactersContainer filtered ={characters}/>):(<CharactersContainer filtered ={filterCharacters}/>)}
    </>
  )
}

export default SearchBar
