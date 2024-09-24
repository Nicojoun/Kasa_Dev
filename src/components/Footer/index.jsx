import '../../assets/styles/Footer.scss';
import logo_footer from '../../assets/logo/logo_footer.png';    
import { Link } from 'react-router-dom';  // Importation de Link pour la navigation

function Footer() {
  return (
    <div className='footer'>
      <Link to="/">  {/* Lien vers la page d'accueil */}
        <img src={logo_footer} alt="Logo_Footer" className='footer-logo' />  {/* Affichage de l'image */}
      </Link>
      <p className='footer-copyright'>© 2020 Kasa. All rights reserved</p> {/* Affichage du copyright */}
    </div>
  );
}

export default Footer;
