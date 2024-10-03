import React, { useRef, useState } from 'react';
import '../../assets/styles/Collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Utiliser un seul icône

function Collapse({ title, content, collapseStyle }) {
  const [open, setOpen] = useState(false); // État pour gérer l'ouverture/fermeture
  const contentRef = useRef(null); // Utilisation de useRef pour accéder à la hauteur du contenu

  return (
    <div style={collapseStyle} className="collapse">
      <div className="collapse-title">
        <div>{title}</div>
        {/* Ajouter une classe pour gérer la rotation du chevron */}
        <FontAwesomeIcon
          onClick={() => setOpen(o => !o)}
          icon={faChevronUp}
          className={`collapse-chevron ${open ? 'collapse-chevronRotate' : ''}`} // Appliquer la rotation conditionnellement
        />
      </div>
      {/* Contenu déroulant */}
      <div className={`collapse-content ${open ? 'collapse-open' : ''}`}>
        <div className="collapse-text">{content}</div>
      </div>
    </div>
  );
}

export default Collapse;
