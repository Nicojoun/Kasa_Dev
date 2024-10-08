import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import de useNavigate pour la redirection
import logements from '../../datas/logements.json'; // Import des données
import '../../assets/styles/HousingSheet.scss';
import Collapse from '../../components/Collapse';
import Slideshow from '../../components/Slideshow'; // Import du composant Slideshow
import Banner from '../../components/Banner'; // Import du composant Banner
import Rating from '../../components/Rating'; // Import du composant Rating
import Tag from '../../components/Tag'; // Import du composant Tag
import Host from '../../components/Host';

function HousingSheet() {
  const { id } = useParams(); // Récupération de l'ID depuis les paramètres de l'URL
  const logement = logements.find(log => log.id === id); // Recherche du logement correspondant
  const navigate = useNavigate(); // Pour la redirection

  useEffect(() => {
    // Si le logement n'est pas trouvé, redirection vers la page NotFound
    if (!logement) {
      navigate('/notfound'); // Redirection vers la page NotFound
    }
  }, [logement, navigate]);

  // Si le logement n'est pas trouvé, ne rien afficher (car on sera redirigé)
  if (!logement) {
    return null;
  }

  // Données pour le Collapse
  const dataCollapse = [
    { title: 'Description', content: (<p>{logement.description}</p> ) }, // Ajout de la description
    { 
      title: 'Équipements', 
      content: (
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index} style={{listStyle: 'none', position: 'relative', right: '5%'}}>{equipment}</li>
          ))}
        </ul>
      ) // Ajout des équipements en tant que liste
    },
  ];

  return (
    <div className='housingSheet'>
      {/* Utilisation du composant Banner avec l'image du logement */}
      <Banner bannerClass="bannerHousingSheet" bannerText="">    
        {/* Intégration du Slideshow pour naviguer entre les images du logement */}
        <Slideshow >
        {logement.pictures.map((picture, index) => (
            <img key={index} className='bannerHousingSheet-image' src={picture} alt={`Slide ${index + 1}`} />
          ))}
        </Slideshow> 
      </Banner>

        <div className='housingSheet-center'>

          <div className='housingSheet-left'>
            <h1 className='housingSheet-title'>{logement.title}</h1> {/* Affichage du titre du logement */}
            <h2 className='housingSheet-location'>{logement.location}</h2> {/* Affichage du lieu du logement */}
            {/* Affichage des tags avec le composant Tag */}
            <div className='housingSheet-tagList'>
              {logement.tags.map((tag, index) => (
              <Tag key={index} text={tag} />  // Utilisation du composant Tag pour afficher chaque tag
              ))}
            </div>
          </div>

          <div className='housingSheet-right'>
            {/* Affichage du nom et de la photo de l'hôte */}
            <div className='housingSheet-host'>
              <Host name={logement.host.name} picture={logement.host.picture} /> 
              {/* Affichage de la note sous forme d'étoiles */}
              <div className='housingSheet-rating'>
                <Rating rating={logement.rating} empty='housingSheet-empty' filled='housingSheet-filled' />
              </div>
            </div>
          </div>

        </div>  

      <div className='housingSheet-wraper'>    
        {/* Boucle pour afficher chaque élément du tableau dans un Collapse */}
        {dataCollapse.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} /> 
        ))}
      </div>
    </div>
  );
}

export default HousingSheet;