import '../../assets/styles/ListCollapse.scss';  
import Collapse from '../../components/Collapse';

// Tableau des valeurs à passer au composant Collapse
const dataCollapse = ['Fiabilité', 'Respect', 'Service', 'Sécurité'];

function ListCollapse() {
  return (
    <div className='listCollapse'>
      {/* Parcours de dataCollapse pour créer un composant Collapse pour chaque élément */}
      {dataCollapse.map((item, index) => (
        <Collapse key={index} title={item} />  /* Passer l'élément comme prop title */
      ))}
    </div>
  );
}

export default ListCollapse;
