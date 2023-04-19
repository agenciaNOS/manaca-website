import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination } from 'swiper';

export default function Carousel({ children, items, key, ...rest }) {
  const CarouselItems = children.map((ChildComponent, index) => (
    <SwiperSlide key={index}>
      {() => ChildComponent}
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        // centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
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
    </>
  );
}