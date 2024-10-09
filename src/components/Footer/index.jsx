import '../../assets/styles/Footer.scss';
import logo_footer from '../../assets/logo/logo_footer.png';    
import { Link } from 'react-router-dom';  

function Footer() {
  return (
    <div className='footer'>
      <Link to='/' >  
        <img src={logo_footer} alt='Logo Footer' className='footer-logo' />  
      </Link>
      <p className='footer-copyright'>© 2020 Kasa. All rights reserved</p> 
    </div>
  );
}

export default Footer;
