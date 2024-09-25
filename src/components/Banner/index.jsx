import '../../assets/styles/Banner.scss';
import backgroundImage from '../../assets/image/image_background.png';  // Importation de l'image

function Banner() {
  return (
    <div className='banner'>
      <h1 className='banner-text'>Chez vous, partout et ailleurs</h1>  {/* Texte au-dessus de l'image */}
      <img src={backgroundImage} alt="paysage" className='banner-background' />  {/* Utilisation de l'image importée */}
    </div>
  );
}

export default Banner;
