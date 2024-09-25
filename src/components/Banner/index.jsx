import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../assets/styles/Banner.scss';  

function Banner() {
  const location = useLocation();

  // Choisir la classe en fonction de la route
  const bannerClass = location.pathname === '/' ? 'banner' : 'banner2';

  return (
    <div className={bannerClass}>
      <h1 className='banner-text'>
        {location.pathname === '/' ? "Chez vous, partout et ailleurs" : ""}
      </h1>
    </div>
  );
}

export default Banner;
