import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logements from '../../datas/logements.json';
import '../../assets/styles/Slideshow.scss';

// Importation des icônes Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Slideshow({ currentId }) {
  const navigate = useNavigate();
  const currentIndex = logements.findIndex(logement => logement.id === currentId);
  const [currentSlide, setCurrentSlide] = useState(currentIndex);

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + logements.length) % logements.length;
    setCurrentSlide(prevIndex);
    navigate(`/housing/${logements[prevIndex].id}`);
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % logements.length;
    setCurrentSlide(nextIndex);
    navigate(`/housing/${logements[nextIndex].id}`);
  };

  return (
    <div className="slideshow">
      <p className="slideshow-buttonPrev" onClick={prevSlide}>
        ❮ {/* Chevron gauche */}
      </p>
      <p className="slideshow-buttonNext" onClick={nextSlide}>
        ❯ {/* Chevron droit */}
      </p>
    </div>
  );
}

export default Slideshow;
