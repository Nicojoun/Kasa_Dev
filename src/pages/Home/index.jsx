import React from 'react';
import '../../assets/styles/Home.scss';
import Banner from '../../components/Banner';  // Importation du composant Banner
import logements from '../../datas/logements.json'; // Assurez-vous d'importer le fichier JSON
import Card from '../../components/Card';  // Importation du composant Card
import { Link } from 'react-router-dom'; // Importer Link pour la navigation

function Home() {
  return (
    <div>
      <Banner />  {/* Affichage du composant Banner */}
      <div className='home'> 
        {logements.map(logement => (
          <Link className='home-linkHousing' key={logement.id} to={`/housing/${logement.id}`}>  {/* Navigation avec l'ID */}
            <Card className='home-card'> {/* Utilisation de Card avec children */}
              <img src={logement.cover} alt={logement.title} className='home-cardImage' /> {/* Affichage de l'image de la location */}
              <h2 className='home-cardTitle'>{logement.title}</h2> {/* Affichage du titre de la location */}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
