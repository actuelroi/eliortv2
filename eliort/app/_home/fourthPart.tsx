'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const slides = [
     {
    titre: 'Gestion des talents',
    texte: `Nous construisons des passerelles entre les différentes formes de collaboration : salariés, freelances, entrepreneurs et portage salarial.`,
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1200&q=80',
  },
  
  {
    titre: 'Technologie',
    texte: `Nous réinventons et transformons les modèles industriels et économiques grâce à une approche qui combine expertise, technologie et digital.`,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80',
  },
 
  {
    titre: 'Leadership & Plaidoyer',
    texte: `Nous offrons du coaching, de la formation et du conseil aux comités exécutifs pour les aider à définir leur raison d'être, leur positionnement et leur stratégie.`,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
  },
]

const FourthPart = () => {
  const [index, setIndex] = useState(0)

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative w-full flex flex-col items-center py-10">
      <div className="relative w-[90%] max-w-6xl flex gap-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative w-full rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src={slides[index].image}
              alt={slides[index].titre}
              width={1200}
              height={600}
              className="object-cover w-full h-[500px]"
            />
            <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-between">
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-2">{slides[index].titre}</h2>
                <p className="text-sm md:text-base max-w-md">{slides[index].texte}</p>
              </div>
              <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full w-fit flex items-center gap-2">
                En savoir plus <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Flèche gauche */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-12 h-12 flex items-center justify-center z-10"
        >
          <ArrowLeft />
        </button>

        {/* Flèche droite */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-12 h-12 flex items-center justify-center z-10"
        >
          <ArrowRight />
        </button>
      </div>

      {/* Traits de pagination */}
      <div className="mt-6 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === i ? 'bg-purple-600 scale-110' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default FourthPart
