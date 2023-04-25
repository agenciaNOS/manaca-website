import React from 'react';
import { RatingStars } from '../RatingStars';

import useDevice from '../../hooks/use-device';

export default function Testimonial({ description, name, pictureUrl, plusDescription = false, rating, timeAgo }) {
  const device = useDevice();

  const isDesktop = () => device === 'desktop';

  return (
    <div
      className="my-6 lg:p-6 rounded md:min-w-[100%] md:max-w-[100%] lg:min-w-[50%] lg:max-w-[50%] shadow-xl hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer bg-white"
      style={ !isDesktop() ? { padding: '12px' } : {} }
    >
      <div className='flex flex-wrap items-center justify-between mb-4 gap-2'>
        <div className='flex items-center grow-0'>
          <img src={pictureUrl} referrerPolicy="no-referrer" />

          <span className="ml-4 lg:text-2xl sm:text-xl md:text-xl font-bold text-clip">
            {name}
          </span>
        </div>

        <RatingStars className="grow" quantity={rating} />
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
