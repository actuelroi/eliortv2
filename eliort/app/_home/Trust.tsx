'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const logos = [
  { name: 'TechNova', src: '/logo/logoipsum-290.png' },
  { name: 'AlphaNet', src: '/logo/logoipsum-347.png' },
  { name: 'GreenFlow', src: '/logo/logoipsum-357.png'},
  { name: 'NeoCloud', src: '/logo/logoipsum-361.png' },
  { name: 'DataSphere', src: '/logo/logoipsum-290.png' },
  { name: 'Finora', src: '/logo/logoipsum-290.png' },
  { name: 'Meditek', src: '/logo/logoipsum-370.png' },
  { name: 'Logixa', src: '/logo/logoipsum-290.png' },

]

const PartnerLogoMarquee = () => {
  return (
    <div className="overflow-hidden w-full py-8 bg-gray-100">
      <motion.div
        className="flex gap-16 animate-scroll whitespace-nowrap"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: 'linear',
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="min-w-[150px] flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.name}
              width={60}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default PartnerLogoMarquee
