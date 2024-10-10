import '../../assets/styles/Banner.scss';

function Banner({ bannerText, bannerClass , children  }) {
  return (
    <div className={`banner ${bannerClass}`}>
      <h1 className='banner-title'>
        {bannerText}
      </h1>
      {children}
    </div>
  );
}

export default Banner;