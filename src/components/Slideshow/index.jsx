import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Utiliser useNavigate pour la navigation entre les pages de logements
import logements from '../../datas/logements.json'; // Importer les logements

function Slideshow({ currentId }) {
  const navigate = useNavigate();
  const currentIndex = logements.findIndex(logement => logement.id === currentId); // Trouver l'index du logement actuel
  const [currentSlide, setCurrentSlide] = useState(currentIndex);

  // Fonction pour passer au logement précédent
  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + logements.length) % logements.length;
    setCurrentSlide(prevIndex);
    navigate(`/housing/${logements[prevIndex].id}`); // Naviguer vers le logement précédent
  };

  // Fonction pour passer au logement suivant
  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % logements.length;
    setCurrentSlide(nextIndex);
    navigate(`/housing/${logements[nextIndex].id}`); // Naviguer vers le logement suivant
  };

  return (
    <div className="slideshow">
      <button className="slideshow-button prev" onClick={prevSlide}>
        ❮ {/* Chevron gauche */}
      </button>
      <button className="slideshow-button next" onClick={nextSlide}>
        ❯ {/* Chevron droit */}
      </button>
    </div>
  );
}

export default Slideshow;
