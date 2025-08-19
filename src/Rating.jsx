import React, { useState } from 'react'

export const Rating = () => {
     const [rating, setRating] = useState(0);
  return (
     <div>
      {[1,2,3,4,5].map((starValue, index) => {
        return (
          <span
            key={index}
            onClick={() => setRating(starValue)}
            style={{ cursor: 'pointer', color: starValue <= rating ? 'gold' : 'gray' }}
          >
            ★
          </span>
        );
      })}
    </div>
  )
}

//prop {totalStars = 5}
// [...Array(totalStars)]