import '../../assets/styles/Collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importer le composant FontAwesomeIcon
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';  // Importer l'icône spécifique

function Collapse({ title }) {
  return (
    <div className='collapse'>
        <div className='collapse-item'>
            {title}
            <FontAwesomeIcon icon={faChevronUp} style={{ color: "#ffffff" }} /> 
        </div>
    </div>
  );
}

export default Collapse;
