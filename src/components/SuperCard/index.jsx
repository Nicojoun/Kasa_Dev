import '../../assets/styles/SuperCard.scss';
import Card from '../../components/Card';  // Importation du composant Card

function SuperCard() {
  return (
    <div className='superCard'>
        <Card /> {/* Affichage du composant Card ici */}
    </div>
  );
}

export default SuperCard;
