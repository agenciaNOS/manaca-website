import React from 'react'
import Image from 'next/image'

function Hero({ heroSection }) {
  const { title, CTA } = heroSection
  return (
    <section className="relative h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.jpeg" 
          alt="Manacá Consultoria Ambiental" 
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-50"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 text-center">
        <div className="max-w-6xl mx-auto bg-black/20 backdrop-filter backdrop-blur-md p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl border border-white/20">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-white leading-tight tracking-tight">
            {title}
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 md:mb-10 font-light leading-relaxed max-w-4xl mx-auto">
            {CTA}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-12">
            <a 
              href="#about" 
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg bg-primary text-white font-semibold rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl hover:bg-darkestgreen active:bg-darkestgreen transform hover:scale-105 active:scale-95 hover:shadow-2xl transition-all duration-300 touch-manipulation"
            >
              Saiba mais
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg bg-white text-primary font-semibold rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl hover:bg-gray-50 active:bg-gray-100 border-2 border-primary/20 hover:border-primary transform hover:scale-105 active:scale-95 hover:shadow-2xl transition-all duration-300 touch-manipulation"
            >
              Entre em contato
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <p className="text-white mb-2 text-sm font-light">Rolar para baixo</p>
          <a href="#about" className="text-white animate-bounce">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero