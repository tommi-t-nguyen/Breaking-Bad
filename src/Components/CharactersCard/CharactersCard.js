import React from 'react';
import PropTypes from 'prop-types';
import './CharactersCard.css';
import { NavLink} from 'react-router-dom'

const CharactersCard = ({name, img, id}) => {
  return (
    <div className='card' id={id}>
      <NavLink to={`/characters/${id}`}>
      <img className='character-image grow'src={img} alt= {name}/>
      </NavLink>
      <p className='character-name'>{name}</p>
    </div>
  )
}

export default CharactersCard;

CharactersCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
