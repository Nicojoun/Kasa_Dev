import React from 'react';
import '../../assets/styles/Card.scss';

function Card({ logement }) { // Récupérer le logement passé en prop
  return (
    <div className='card'>
      <h2>{logement.title}</h2> {/* Affichage du titre de la location */}
      <p>{logement.cover}</p> {/* Affichage de l'image de la location */}
    </div>
  );
}

export default Card;
