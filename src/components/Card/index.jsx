import React from 'react';
import '../../assets/styles/Card.scss';

function Card({ image, cardTitle, AltImage }) { // Accepter les children comme props
  return (
    <div className='card'>
        <img src={image} alt={AltImage} className='home-cardImage' /> {/* Affichage de l'image de la location */}
        <h2 className='home-cardTitle'>{cardTitle}</h2> 
    </div>
  );
}

export default Card;