import '../../assets/styles/Banner.scss';

function Banner({ bannerText, bannerClass }) {
  return (
    <div className={`banner ${bannerClass}`}>
      <h1 className='banner-title'>
        {bannerText}
      </h1>
    </div>
  );
}

export default Banner;