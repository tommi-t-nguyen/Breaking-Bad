import React from 'react';
import CharactersCard from '../CharactersCard/CharactersCard.js'

const CharactersContainer = ({filtered}) => {
  const characterCards = filtered.map((character, key) => {
    return(
      <CharactersCard
        key={key}
        id={character.char_id}
        name={character.name}
        img={character.img}
      />
    )
  })
  return (
    <div className='character=container'>
      {characterCards}
    </div>
  )
}

export default CharactersContainer
