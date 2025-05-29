'use client'


import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'



import { motion } from 'framer-motion'




const SecondPart = () => {



    const profiles = [
        { name: 'Nate', src: '/image/banner3.jpg', className: 'top-8 left-10 w-24 h-24' },
        { name: 'Toa', src: '/image/banner2.jpg', className: 'bottom-10 left-16 w-16 h-16' },
        { name: 'Marie', src: '/image/banner1.jpg', className: 'top-0 right-20 w-14 h-14' },
    ]
    return (
        <section className="p-6 md:p-12 flex flex-col md:flex-row items-center pb-10 mb-20">
            {/* Colonne gauche */}

            <div className="md:w-1/2 space-y-6 z-10">
                <h1 className="text-3xl md:text-5xl font-bold text-[#0E2148]">
                    Accélérer la <br /> Transformation Digitale
                </h1>

                <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">#Entrepreneur</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">#Secteur privé</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">#Secteur public</span>
                </div>

                <p className="text-gray-700 font-medium">
                    Eliort propose son expertise en conseil, <br />
                    technologie, comptabilité et analyse de données <br />
                    pour favoriser la croissance des entreprises.
                </p>

                <div className="flex flex-row gap-4">
                    <Button className="cursor-pointer">Nous contacter</Button>
                    <Button className="bg-[#0E2148] cursor-pointer">Demander un rendez-vous</Button>
                </div>
            </div>

            {/* Colonne droite avec image */}


            {/* Colonne droite avec animation d’images rondes */}
            <div className="md:w-1/2 relative flex ">
                {/* Image principale */}
                <div className="absolute -top-[200px] -left-[200px] w-[800px] h-[500px] overflow-hidden rounded-xl shadow-lg">
                    <Image
                        src="/image/banner.jpg"
                        alt="Photographe"
                        fill
                        className="object-cover"
                    />

                </div>
                {/* Images secondaires animées autour */}
                {profiles.map((profile, index) => (
                    <div
                        key={index}
                        className={`absolute rounded-full border-4 border-white overflow-hidden ${profile.className}`}


                    >
                        <Image
                            src={profile.src}
                            alt={profile.name}
                            width={100}
                            height={100}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-0.5 rounded-full">
                            {profile.name}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SecondPart
