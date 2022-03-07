import React from 'react';
import PropTypes from 'prop-types';
import CharactersCard from '../CharactersCard/CharactersCard.js'
import './CharactersContainer.css'

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
    <div className='characters-container'>
      {characterCards}
    </div>
  )
}

export default CharactersContainer;

CharactersContainer.propTypes = {
  filtered: PropTypes.array.isRequired
};
