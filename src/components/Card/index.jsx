import React from 'react';
import '../../assets/styles/Card.scss';

function Card({ cardSrc, cardTitle, cardAlt, cardClass }) {
  return (
    <div className={`card ${cardClass}`}>
        <img src={cardSrc} alt={cardAlt} className='card-image' /> {/* Affichage de l'image de la location */}
        <h2 className='card-title'>{cardTitle}</h2> 
    </div>
  );
}

export default Card;
