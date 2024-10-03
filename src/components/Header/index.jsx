import '../../assets/styles/Header.scss'; 
import logo from '../../assets/logo/logo.png';  
import { Link, useLocation } from 'react-router-dom';  // Importation de useLocation

function Header() {
  const location = useLocation(); // Récupération de l'URL actuelle

  return (
    <div className='header'>
      <Link to="/" className='header-logoLink'>  {/* Lien vers la page d'accueil */} 
        <img src={logo} alt="Logo" className='header-logo'/>  {/* Affichage de l'image */} 
      </Link>

      <nav className='header-nav'>

        {/* Si on est sur la page d'accueil, afficher du texte souligné, sinon un lien */}
        {location.pathname === '/' ? (
          <span className='header-linkActive'>Accueil</span>  // Texte souligné
        ) : (
          <Link to="/" className='header-link'>Accueil</Link>  // Lien normal
        )}

        {/* Si on est sur la page "À propos", afficher du texte souligné, sinon un lien */}
        {location.pathname === '/about' ? (
          <span className='header-linkActive'>À propos</span>  // Texte souligné
        ) : (
          <Link to="/about" className='header-link'>À propos</Link>  // Lien normal
        )}

      </nav>
    </div>
  );
}

export default Header;
