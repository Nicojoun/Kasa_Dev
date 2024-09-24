import '../../styles/App.scss';  
import logo from '../../assets/logo.png';  // Importation de l'image
import { Link } from 'react-router-dom';  // Importation de Link pour la navigation

function Header() {
  return (
    <div>
      <img src={logo} alt="Logo" />  {/* Affichage de l'image */}
      
      <nav>  
        <ul>
          <li>
            <Link to="/">Accueil</Link>  {/* Lien vers la page d'accueil */}
          </li>
          <li>
            <Link to="/about">À propos</Link>  {/* Lien vers la page "À propos" */}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
