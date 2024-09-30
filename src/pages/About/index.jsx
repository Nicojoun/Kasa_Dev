import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import '../../assets/styles/About.scss';

// Tableau des valeurs à passer au composant Collapse, propre à la page About
const dataCollapse = [
  { title: 'Fiabilité', content: 'Description de la fiabilité' },
  { title: 'Respect', content: 'Description du respect' },
  { title: 'Service', content: 'Description du service' },
  { title: 'Sécurité', content: 'Description de la sécurité' }
];

function About() {
  return (
    <div className='about'>
      <Banner bannerClass="banner2" bannerText="" />  {/* Affichage du composant Banner */}
      <div className='about-collapse'>
        <Collapse data={dataCollapse} /> {/* Passer les données au composant Collapse */}
      </div>
    </div>
  );
}

export default About;
