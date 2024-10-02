import React, { useState } from 'react';
import '../../assets/styles/Slideshow.scss';

function Slideshow({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0); // Gestion de l'index de l'image actuelle
  const totalSlides = React.Children.count(children) - 3; // Nombre total d'images (moins les chevrons et la numérotation)

  // Séparation des chevrons, des slides, et de la numérotation dans le tableau `children`
  const slides = React.Children.toArray(children).filter(child => child.type === 'img'); // Filtrer les images
  const chevrons = React.Children.toArray(children).filter(child => child.type !== 'img' && !child.props.className?.includes('slideshow-counter')); // Filtrer les chevrons
  const counter = React.Children.toArray(children).find(child => child.props.className?.includes('slideshow-counter')); // Filtrer la numérotation

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    setCurrentSlide(prevIndex); // Passer à l'image précédente
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % totalSlides;
    setCurrentSlide(nextIndex); // Passer à l'image suivante
  };

  return (
    <div className="slideshow">
      {/* Chevron gauche */}
      <span onClick={prevSlide}>
        {chevrons[0]} {/* Le premier enfant qui n'est pas une image */}
      </span>
      
      {/* Affichage de l'image actuelle */}
      {slides[currentSlide]} {/* Affichage de l'image correspondant au slide actuel */}

      {/* Affichage de la numérotation passée en tant que children */}
      {counter}

      {/* Chevron droit */}
      <span onClick={nextSlide}>
        {chevrons[1]} {/* Le deuxième enfant qui n'est pas une image */}
      </span>
    </div>
  );
}

export default Slideshow;
