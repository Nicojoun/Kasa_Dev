import React from 'react';
import '../../assets/styles/Card.scss';

function Card({ cardSrc, cardTitle, cardAlt }) {
  return (
    <div className='card'>
        <img src={cardSrc} alt={cardAlt} className='card-image' /> {/* Affichage de l'image de la location */}
        <div className='card-info'>
          <h2 className='card-title'>{cardTitle}</h2>
        </div>   
    </div>
  );
}

export default Card;