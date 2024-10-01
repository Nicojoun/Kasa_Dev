import React, { useState } from 'react';
import '../../assets/styles/Collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importer le composant FontAwesomeIcon
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Importer l'icône spécifique

function Collapse({ title, content, collapseStyle  }) {
  const [open, setOpen] = useState(false); // État pour gérer l'ouverture/fermeture d'un seul élément

  return (
    <div className={collapseStyle} onClick={() => setOpen(o => !o)}>
      <div className="collapse-title">
        <div>{title}</div>
        {/* Changer l'icône selon l'état open */}
        <FontAwesomeIcon icon={open ? faChevronDown : faChevronUp} style={{ color: '#ffffff' }} />
      </div>
      {/* Afficher le contenu uniquement si open est true */}
      {open && (
        <div className="collapse-content">
          <p className="collapse-text" style={{ color: '#000000' }}>
            {content}
          </p>
        </div>
      )}
    </div>
  );
}

export default Collapse;
