import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import '../../assets/styles/About.scss';

// Tableau des valeurs à passer au composant Collapse, propre à la page About
const dataCollapse = [
  { title: 'Fiabilité', content: (<p>{'Description de la Fiabilité'}</p>) },
  { title: 'Respect', content: (<p>{'Description du respect'}</p>) },
  { title: 'Service', content: (<p>{'Description du Service'}</p>) },
  { title: 'Sécurité', content: (<p>{'Description de la Sécurité'}</p>) }
];

function About() {
  return (
    <div className='about'>
      <Banner bannerClass="about-banner" />  {/* Affichage du composant Banner */}
        {/* Boucle pour afficher chaque élément du tableau dans un Collapse */}
        {dataCollapse.map((item, index) => (
          <Collapse className='collapse'
            key={index} 
            title={item.title} 
            content={item.content} 
          /> 
        ))}
      </div>
  );
}

export default About;