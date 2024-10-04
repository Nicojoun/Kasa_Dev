import React from 'react';
import '../../assets/styles/Host.scss';

const Host = ({ name, picture }) => {

  return (
    <div className='host'>
      <span className='host-name'>{name}</span> {/* Nom de l'hôte */}
      <img className='host-image' src={picture} alt={name} /> {/* Photo de l'hôte */}
    </div>
  );
};

export default Host;
