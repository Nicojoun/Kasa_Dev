import React from 'react';
import '../../assets/styles/SuperCard.scss';
import logements from '../../datas/logements.json'; // Importation du fichier JSON
import Card from '../../components/Card';  // Importation du composant Card

function SuperCard() {
  return (
    <div className='superCard'>
      {logements.map(logement => (
        <Card key={logement.id} logement={logement} /> // Passer le logement comme prop
      ))}
    </div>
  );
}

export default SuperCard;
