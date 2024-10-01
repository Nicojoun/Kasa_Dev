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
      <Banner bannerClass="about-banner2" bannerText="" />  {/* Affichage du composant Banner */}
      <div className='about-collapse'>
        {/* Boucle pour afficher chaque élément du tableau dans un Collapse */}
        {dataCollapse.map((item, index) => (
          <Collapse 
            key={index} 
            title={item.title} 
            content={item.content} 
            collapseStyle="collapse"
          /> 
        ))}
      </div>
    </div>
  );
}

export default About;
