import React from 'react';
import { useParams } from 'react-router-dom'; // Utiliser useParams pour récupérer l'ID de l'URL
import logements from '../../datas/logements.json'; // Importer les données des logements
import '../../assets/styles/HousingSheet.scss';
import Collapse from '../../components/Collapse';
import Slideshow from '../../components/Slideshow'; // Importer le composant Slideshow

function HousingSheet() {
  const { id } = useParams(); // Récupérer l'ID depuis les paramètres de l'URL
  const logement = logements.find(log => log.id === id); // Trouver le logement correspondant

  // Fonction pour afficher les étoiles en fonction de la note
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`housingSheet-star ${i <= rating ? 'housingSheet-filled' : ''}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  // Données pour le Collapse
  const dataCollapse = [
    { title: 'Description', content: logement.description }, // Ajout de la description
    { 
      title: 'Équipements', 
      content: (
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      ) // Ajout des équipements en tant que liste
    },
  ];

  return (
    <div className='housingSheet'>
      {/* Intégration du Slideshow pour naviguer entre les logements */}
      <Slideshow currentId={id} />

      <img className='housingSheet-image' src={logement.cover} alt={logement.title} /> {/* Affichage de l'image du logement */}
      <h1 className='housingSheet-title'>{logement.title}</h1> {/* Affichage du titre du logement */}
      <h2 className='housingSheet-location'>{logement.location}</h2> {/* Affichage du lieu du logement */}

      {/* Affichage des tags */}
      <div className='housingSheet-tagList'>
        {logement.tags.map((tag, index) => (
          <span key={index} className='housingSheet-tag'>{tag}</span>  // Affichage de chaque tag
        ))}
      </div>

      {/* Affichage du nom et de la photo de l'hôte */}
      <div className='housingSheet-host'>
        <span className='housingSheet-hostName'>{logement.host.name}</span> {/* Nom de l'hôte */}
        <img className='housingSheet-hostImage' src={logement.host.picture} alt={logement.host.name} /> {/* Photo de l'hôte */}
      </div>

      {/* Affichage de la note sous forme d'étoiles */}
      <div className='housingSheet-rating'>
        {renderStars(logement.rating)} {/* Appel de la fonction pour afficher les étoiles */}
      </div>

      {/* Affichage des descriptions et des équipements avec Collapse */}
      <div className='housingSheet-divCollapse'>
        <Collapse className='housingSheet-collapse' data={dataCollapse} /> {/* Passer les données au composant Collapse */}
      </div>
    </div>
  );
}

export default HousingSheet;
