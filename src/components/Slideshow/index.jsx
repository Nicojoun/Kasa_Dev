import React, { useState } from 'react';
import '../../assets/styles/Slideshow.scss';

function Slideshow({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0); // Gestion de l'index de l'élément actuelle
  const totalSlides = React.Children.count(children) - 2; // Nombre total de slides (moins les deux chevrons)

  // Séparation des chevrons et des éléments dans le tableau `children`
  const slides = React.Children.toArray(children).filter(child => child.type === 'img'); // Filtrer les éléments
  const chevrons = React.Children.toArray(children).filter(child => child.type !== 'img'); // Filtrer les chevrons

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    setCurrentSlide(prevIndex); // Passer à l'élément précédente
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % totalSlides;
    setCurrentSlide(nextIndex); // Passer à l'élément suivante
  };

  return (
    <div className="slideshow">
      {/* Chevron gauche */}
      <span onClick={prevSlide}>
        {chevrons[0]} {/* Le premier enfant qui n'est pas une élément */}
      </span>
      
      {/* Affichage de l'élément courante */}
        {slides[currentSlide]} {/* Affichage de l'élément correspondant au slide actuel */}

      {/* Chevron droit */}
      <span onClick={nextSlide}>
        {chevrons[1]} {/* Le deuxième enfant qui n'est pas un élément */}
      </span>
    </div>
  );
}

export default Slideshow;
