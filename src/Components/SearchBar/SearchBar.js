import React, { useState } from 'react';
import CharactersContainer from '../CharactersContainer/CharactersContainer.js'

const SearchBar = ({characters}) => {
  const [filter, setFilter] = useState('')
  const [filterCharacters, setFilterCharacters] = useState([characters])

  const handleChange = (value) => {
    setFilter(value)
    const find = characters.filter((character) => {
      if(filter === "") {
        return character
      }else if (character.name.toLowerCase().includes(filter.toLowerCase())){
        return character
      }
    })
    setFilterCharacters(find)
  }
  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='search-bar'
          placeholder='Search characters...'
          value={filter}
          onChange={(e) => handleChange(e.target.value) }
          autoFocus
        />
      </form>
      <CharactersContainer filtered ={filterCharacters}/>
    </section>

  )
}

export default SearchBar
