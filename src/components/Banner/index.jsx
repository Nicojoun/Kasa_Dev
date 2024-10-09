function Banner({ bannerClass, bannerText, bannerTextClass, children }) {
  return (
    <div className={bannerClass}>
      <h1 className={bannerTextClass}>
        {bannerText}
      </h1>
      {children}
    </div>
  );
}

export default Banner;