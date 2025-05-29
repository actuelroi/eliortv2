'use client'


import React from 'react'

const services = [
  
  'Applications Mobiles',
  'Data Science',
  'Automatisation',
  'Intégration IA',
  'Cybersécurité',
 
  'Cloud & DevOps',
]

const FinalVue = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center mt-10">
      {/* Vidéo de fond */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video/vid.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge la vidéo HTML5.
      </video>

      {/* Filtre sombre */}
      

      {/* Contenu principal */}
      <div className="z-20 text-center text-white px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Eliort</h1>
        <p className="text-lg md:text-xl mb-8">
          Nous transformons vos idées en solutions digitales performantes.
        </p>

        {/* Liste défilante */}
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex gap-6 animate-scroll-slow px-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white text-[#0E2148] text-sm md:text-base px-5 py-2 rounded-full shadow-md inline-block font-semibold"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalVue;
