import React from 'react';
import '../../assets/styles/Card.scss';

function Card({ logement }) { // Récupérer le logement passé en prop
  return (
    <div className='card'>
      <img src={logement.cover} alt={logement.title} className='card-image' /> {/* Affichage de l'image de la location */}
      <h2 className='card-title'>{logement.title}</h2> {/* Affichage du titre de la location */}
    </div>
  );
}

export default Card;
