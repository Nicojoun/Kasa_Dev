import '../../styles/Footer.scss';
import logo_footer from '../../assets/logo_footer.png';    
import { Link } from 'react-router-dom';  // Importation de Link pour la navigation

function Footer() {
  return (
    <div className='Footer'>
      <Link to="/">  {/* Lien vers la page d'accueil */}
        <img src={logo_footer} alt="Logo_Footer" className='Footer-logo' />  {/* Affichage de l'image */}
      </Link>
      <p className='Footer-copyright'>© 2020 Kasa. All rights reserved</p> {/* Affichage du copyright */}
    </div>
  );
}

export default Footer;
