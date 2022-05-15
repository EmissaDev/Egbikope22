import React from 'react';

import './Card.css';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card)
  }
  return(
    <li className="element__item">
      <img className="element__photo" src={props.src} alt={props.alt} onClick={handleClick} />
      <caption className="element__name">{props.title}</caption>
    </li>
  )
}

export default Card;