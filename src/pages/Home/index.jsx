import React from 'react';
import '../../assets/styles/Home.scss';
import Banner from '../../components/Banner';  // Importation du composant Banner
import logements from '../../datas/logements.json'; // Assurez-vous d'importer le fichier JSON
import Card from '../../components/Card';  // Importation du composant Card
import { Link } from 'react-router-dom'; // Importer Link pour la navigation

function Home() {
  return (
    <div>
      <Banner bannerClass="bannerHome" bannerText="Chez vous, partout et ailleurs" bannerTextClass="bannerHomeText" />  {/* Affichage du composant Banner */}
      <div className='home'> 
        {logements.map(logement => (
          <Link className='home-linkHousing' key={logement.id} to={`/housing/${logement.id}`}>  {/* Navigation avec l'ID */}
            <Card cardSrc={logement.cover} 
              cardTitle={logement.title}
              cardAlt={logement.title} 
              cardClass='home-card' 
            /> 
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;