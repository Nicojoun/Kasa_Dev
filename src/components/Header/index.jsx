import '../../styles/Header.scss'; 
import logo from '../../assets/logo.png';  
import { Link } from 'react-router-dom';  

function Header() {
  return (
    <div className='Header'>
      <img src={logo} alt="Logo" className='Logo' />  {/* Affichage de l'image */}

      <nav className='Header-nav'>  
        {/* Lien vers la page d'accueil */}
        <Link to="/" className='Header-link'>Accueil</Link>
        {/* Lien vers la page "À propos" */}
        <Link to="/about" className='Header-link'>À propos</Link>
      </nav>
    </div>
  );
}

export default Header;
