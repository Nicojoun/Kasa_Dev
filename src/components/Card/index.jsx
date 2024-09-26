import React from 'react';
import '../../assets/styles/Card.scss';

function Card({ children }) { // Accepter les children comme props
  return (
    <div className='card'>
      {children} {/* Afficher les enfants */}
    </div>
  );
}

export default Card;
