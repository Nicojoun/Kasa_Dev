import { Link } from 'react-router-dom'; 
import '../../assets/styles/NotFound.scss';

function NotFound() {
  return (
    <div className='notFound' >
      <h1 className='notFound-404'>404</h1>
      <p className='notFound-message'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to='/' className='notFound-linkBackHome'> 
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default NotFound;