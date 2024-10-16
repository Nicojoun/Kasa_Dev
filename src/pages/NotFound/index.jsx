import { Link } from 'react-router-dom'; 
import '../../assets/styles/NotFound.scss';

function NotFound() {
  return (
    <div className='notFound' >
      <span className='notFound-404'>404</span>
      <div className='notFound-text'>
        <div className='notFound-message'>
          <span className='notFound-messageTop'>Oups! La page que </span>
          <span className='notFound-messageBottom'>vous demandez n'existe pas.</span>  
        </div>
        <Link to='/' className='notFound-linkBackHome'> 
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  );
}

export default NotFound;