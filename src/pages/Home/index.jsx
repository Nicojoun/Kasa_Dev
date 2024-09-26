import React from 'react';
import '../../assets/styles/Home.scss';
import Banner from '../../components/Banner';  // Importation du composant Banner
import logements from '../../datas/logements.json'; // Assurez-vous d'importer le fichier JSON
import Card from '../../components/Card';  // Importation du composant Card

function Home() {
  return (
    <div>
      <Banner />  {/* Affichage du composant Banner */}
      <div className='home'> 
        {logements.map(logement => (
          <Card key={logement.id}> {/* Utilisation de Card avec children */}
            <img src={logement.cover} alt={logement.title} className='card-image' /> {/* Affichage de l'image de la location */}
            <h2 className='card-title'>{logement.title}</h2> {/* Affichage du titre de la location */}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Home;
