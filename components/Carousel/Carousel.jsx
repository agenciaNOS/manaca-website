import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination } from 'swiper';

import useDevice from '../../hooks/use-device';

export default function Carousel({ children }) {
  const device = useDevice();

  const isDesktop = () => device === 'desktop';

  const CarouselItems = children.map((ChildComponent, index) => (
    <SwiperSlide
      key={index}
      style={{
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: '32px',
        height: '100%',
        width: '100%',
      }}
    >
      {ChildComponent}
    </SwiperSlide>
  ));

  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#34824E',
        '--swiper-pagination-color': '#34824E',
        '--swiper-navigation-size': !isDesktop() ? '16px' : '32px',
      }}
      loop={true}
      autoplay={{
        delay: 35000,
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
