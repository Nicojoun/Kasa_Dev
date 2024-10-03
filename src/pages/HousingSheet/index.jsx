import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Utiliser useParams pour récupérer l'ID de l'URL
import logements from '../../datas/logements.json'; // Importer les données des logements
import '../../assets/styles/HousingSheet.scss';
import Collapse from '../../components/Collapse';
import Slideshow from '../../components/Slideshow'; // Importer le composant Slideshow
import Banner from '../../components/Banner'; // Importer le composant Banner
import Rating from '../../components/Rating'; // Importer le composant Rating
import Tag from '../../components/Tag'; // Importer le composant Tag
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function HousingSheet() {
  const { id } = useParams(); // Récupérer l'ID depuis les paramètres de l'URL
  const logement = logements.find(log => log.id === id); // Trouver le logement correspondant
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const totalSlides = logement.pictures.length;

  return (
    <div className='housingSheet'>
      {/* Utilisation du composant Banner avec l'image du logement */}
      <Banner bannerClass="bannerHousingSheet" bannerText="">
        {/* Intégration du Slideshow pour naviguer entre les images du logement */}
        <Slideshow>
          {totalSlides > 1 && (
            <>
              {/* Chevron gauche */}
              <FontAwesomeIcon 
                icon={faChevronLeft} 
                className="slideshow-buttonPrev" 
                onClick={() => setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides)}
                style={{zIndex: '2', position: 'absolute', top: '75%', left: '2%' , fontSize: '100px', color: 'white'}} 
              />
              {/* Affichage de la numérotation en tant que children */}
              <p className="slideshow-counter"
                style={{ position: 'absolute', right: '50%', top: '160%', color: 'white', zIndex: '2' }}
              >
                {currentSlide + 1}/{totalSlides}
              </p>
              {/* Chevron droit */}
              <FontAwesomeIcon 
                icon={faChevronRight} 
                className="slideshow-buttonNext" 
                onClick={() => setCurrentSlide((currentSlide + 1) % totalSlides)}
                style={{zIndex: '2', position: 'absolute', top: '75%', right: '2%', fontSize: '100px', color: 'white'}}  
              />
            </>
          )}
          {logement.pictures.map((picture, index) => (
            <img key={index} className='bannerHousingSheet-image' src={picture} alt={`Slide ${index + 1}`} style={{zIndex: '1'}} />
          ))}
        </Slideshow> 

        <h1 className='bannerHousingSheet-title'>{logement.title}</h1> {/* Affichage du titre du logement */}
        <h2 className='bannerHousingSheet-location'>{logement.location}</h2> {/* Affichage du lieu du logement */}

        {/* Affichage des tags avec le composant Tag */}
        <div className='bannerHousingSheet-tagList'>
          {logement.tags.map((tag, index) => (
            <Tag key={index} text={tag} 
            style={{zIndex: '2', position: 'absolute', top: '75%', right: '0.3%', fontSize: '100px', color: 'white'}} 
            />  // Utilisation du composant Tag pour afficher chaque tag
          ))}
        </div>

        {/* Affichage du nom et de la photo de l'hôte */}
        <div className='bannerHousingSheet-host'>
          <span className='bannerHousingSheet-hostName'>{logement.host.name}</span> {/* Nom de l'hôte */}
          <img className='bannerHousingSheet-hostImage' src={logement.host.picture} alt={logement.host.name} /> {/* Photo de l'hôte */}
          {/* Affichage de la note sous forme d'étoiles */}
          <Rating rating={logement.rating} empty='bannerHousingSheet-empty' filled='bannerHousingSheet-filled'/>
          {/* Utilisation du composant Tag pour afficher les étoiles */}
        </div>

      </Banner>  

      <div className='housingSheet-wraper'>    
        {/* Boucle pour afficher chaque élément du tableau dans un Collapse */}
        {dataCollapse.map((item, index) => (
          <Collapse  
            key={index} 
            title={item.title} 
            content={item.content} 
            collapseStyle={{ width: '45%', marginBottom: '5%'}}  
          /> 
        ))}
      </div>
    </div>
  );
}

export default HousingSheet;
