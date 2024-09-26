import React from 'react';
import '../../assets/styles/Collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importer le composant FontAwesomeIcon
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Importer l'icône spécifique

// Tableau des valeurs à passer au composant Collapse
const dataCollapse = ['Fiabilité', 'Respect', 'Service', 'Sécurité'];

function Collapse() {
  return (
    <div className='collapse'>
      {/* Parcours de dataCollapse pour créer un composant Collapse pour chaque élément */}
      {dataCollapse.map((item, index) => (
        <div className='collapse-object' key={index}> {/* Ajout de la clé pour chaque élément */}
          <div className='collapse-item'>
            {item} {/* Utilisation de item pour afficher le titre */}
            <FontAwesomeIcon icon={faChevronUp} style={{ color: "#ffffff" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collapse;
