import React from 'react';
import { RatingStars } from '../RatingStars';

export default function Testimonial({ description, name, pictureUrl, plusDescription = false, rating, timeAgo }) {
  return (
    <div className="mt-6 mb-6 p-6 rounded sm:min-w-[70%] sm:max-w-[70%] min-w-[50%] max-w-[50%] shadow-xl hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center'>
          <img src={pictureUrl} referrerPolicy="no-referrer" />

          <span className="ml-4 text-2xl font-bold">
            {name}
          </span>
        </div>

        <RatingStars quantity={rating} />
      </div>

      {Boolean(plusDescription) &&
        <p className="font-bold mb-2">
          {plusDescription}
        </p>
      }

      <p>
        {description}
      </p>

      <p className='font-bold mt-6'>
        Avaliado {timeAgo}
      </p>
    </div>
  )
};
