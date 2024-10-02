import React from 'react';

function Rating({ rating, empty, filled }) {
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`${empty} ${i <= rating ? filled : ''}`}>
        ★
      </span>
    );
  }

  return (
    <div className='rating'>
      {stars}
    </div>
  );
}

export default Rating;
