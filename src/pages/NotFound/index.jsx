import { Link } from 'react-router-dom'; 
import '../../assets/styles/NotFound.scss';

function NotFound() {
  return (
    <div className='notFound' >
      <h1 className='notFound-404'>404</h1>
      <div className='notFound-message'>
        <span className='notFound-messageTop'>Oups! La page que</span>
        <span className='notFound-messageBottom'>vous demandez n'existe pas.</span>  
      </div>
      <Link to='/' className='notFound-linkBackHome'> 
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default NotFound;