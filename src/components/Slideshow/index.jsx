import React, { useState } from 'react';
import '../../assets/styles/Slideshow.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Slideshow({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0); // Gestion de l'index de l'item actuelle
  const totalSlides = React.Children.count(children); // Nombre total de slides (enfants)

  const prevSlide = () => {
    // Passer à l'item précédent, en bouclant à la fin si on est au premier item
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    setCurrentSlide(prevIndex);
  };

  const nextSlide = () => {
    // Passer à l'item suivant, en bouclant au début si on est au dernier item
    const nextIndex = (currentSlide + 1) % totalSlides;
    setCurrentSlide(nextIndex);
  };

  return (
    <div className="slideshow">
      <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} className="slideshow-chevron" />     
        {React.Children.toArray(children)[currentSlide]}
      <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} className="slideshow-chevron" />
    </div>
  );
}

export default Slideshow;
