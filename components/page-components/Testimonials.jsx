import React from 'react';
import { Carousel } from '../Carousel';
import { formattedTestimonials } from '../../content/testimonials';
import { Testimonial } from '../Testimonial';

export default function Testimonials() {
  return (
    <div className="bg-gray py-10">
      <h1 className="text-center text-4xl font-bold text-primary">
        Depoimentos
      </h1>

      <Carousel>
        {formattedTestimonials.map((testimonial, index) => (<Testimonial {...testimonial} key={index} />))}
      </Carousel>
    </div>
  )
};
