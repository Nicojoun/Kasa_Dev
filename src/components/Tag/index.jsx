import React from 'react';

function Tag({ rating }) {
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`bannerHousingSheet-star ${i <= rating ? 'bannerHousingSheet-filled' : ''}`}>
        ★
      </span>
    );
  }

  return (
    <div className='tag'>
      {stars}
    </div>
  );
}

export default Tag;
