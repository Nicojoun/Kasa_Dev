import React, { Children } from 'react';
import '../../assets/styles/Banner.scss';  

function Banner({ bannerClass, bannerText, children }) {
  return (
    <div className={bannerClass}>
      <h1 className='banner-text'>
        {bannerText}
      </h1>
      {children}
    </div>
  );
}

export default Banner;
