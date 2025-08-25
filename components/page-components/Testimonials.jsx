import React from 'react';
import { Carousel } from '../Carousel';
import { formattedTestimonials } from '../../content/testimonials';
import { Testimonial } from '../Testimonial';

export default function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
            Depoimentos
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-light px-2">
            Veja o que nossos clientes dizem sobre nossos serviços
          </p>
        </div>

        <div className="relative">
          <Carousel>
            {formattedTestimonials.map((testimonial, index) => (
              <Testimonial {...testimonial} key={index} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
};
