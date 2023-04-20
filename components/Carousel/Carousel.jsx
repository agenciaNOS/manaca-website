import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination } from 'swiper';

export default function Carousel({ children }) {
  console.log(children);

  const CarouselItems = children.map((ChildComponent, index) => (
    <SwiperSlide
      key={index}
      style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: '2em',
        width: '100%',
      }}
    >
      {ChildComponent}
    </SwiperSlide>
  ));

  return (
    <Swiper
      style={{
        // '--swiper-navigation-color': '#fff',
        // '--swiper-pagination-color': '#fff',
        '--swiper-navigation-color': '#34824E',
        '--swiper-pagination-color': '#34824E',
        width: '100%',
      }}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {CarouselItems}
    </Swiper>
  );
};
