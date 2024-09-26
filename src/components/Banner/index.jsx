import React from 'react';
import '../../assets/styles/Banner.scss';  

function Banner({ bannerClass, bannerText }) {
  return (
    <div className={bannerClass}>
      <h1 className='banner-text'>
        {bannerText}
      </h1>
    </div>
  );
}

export default Banner;
