import React, { useState } from 'react';
import '../../assets/styles/Collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importer le composant FontAwesomeIcon
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Importer l'icône spécifique

function Collapse({ data }) {
  const [activeIndexes, setActiveIndexes] = useState([]); // État pour gérer plusieurs index actifs

  // Fonction pour gérer le clic sur un élément
  const handleToggle = (index) => {
    if (activeIndexes.includes(index)) {
      // Si l'index est déjà actif, le retirer du tableau pour le fermer
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      // Sinon, l'ajouter pour l'ouvrir
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  return (
    <div className='collapse'>
      {data.map((item, index) => (
        <div className='collapse-object' key={index}>
          <div className='collapse-item' onClick={() => handleToggle(index)}>
            {item.title} {/* Affichage du titre de l'item */}
            <FontAwesomeIcon
              icon={activeIndexes.includes(index) ? faChevronDown : faChevronUp} // Changer l'icône selon l'état
              style={{ color: "#ffffff" }}
            />
          </div>
          {activeIndexes.includes(index) && (
            <div className='collapse-content'>
              <p className='collapse-text' style={{ color: "#000000" }}>{item.content}</p> {/* Affichage du contenu si l'item est actif */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Collapse;
