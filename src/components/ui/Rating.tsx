
import React from 'react';

const Rating = ({ rating }:any) => {

  const roundedRating = Math.round(rating * 2) / 2;
 console.log(rating)
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: 5 }, (_, index) => (
        <div
          key={index}
          className={`star ${
            roundedRating >= index + 1
              ? 'text-yellow-500'
              : roundedRating + 2.5 === index + 1
              ? 'text-amber-500'
              : 'text-gray-400'
          } text-2xl`}
        >
          &#9733;
        </div>
      ))}
    </div>
  );
};

export default Rating;