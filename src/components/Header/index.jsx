import '../../styles/Header.scss'; 
import logo from '../../assets/logo/logo.png';  
import { Link } from 'react-router-dom';  

function Header() {
  return (
    <div className='header'>
      <Link to="/">  {/* Lien vers la page d'accueil */}
        <img src={logo} alt="Logo"/>  {/* Affichage de l'image */}
      </Link>

      <nav className='header-nav'>  
        {/* Lien vers la page d'accueil */}
        <Link to="/" className='header-link'>Accueil</Link>
        {/* Lien vers la page "À propos" */}
        <Link to="/about" className='header-link'>À propos</Link>
      </nav>
    </div>
  );
}

export default Header;
