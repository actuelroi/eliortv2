import React from 'react';
import { IoTimer } from 'react-icons/io5';

const EtVous = () => {
  return (

    <section className='my-20'>
        <h1 className='text-center p-4 text-3xl font-semibold'> Des succès story nous definie</h1>
    <div
      className="relative bg-cover bg-center rounded-2xl overflow-hidden shadow-xl max-w-6xl mx-auto p-10"
      style={{
        backgroundImage: "url('/image/use1.jpg')", // 👈 Change ce chemin si nécessaire
      }}
    >
      {/* Overlay blanc semi-transparent */}
      <div className="bg-white/6 backdrop-blur-sm p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Eliort TPaaS Implementation
        </h1>
        <p className="text-gray-700 mb-6 max-w-2xl">
          Eliort a consolidé les applications de santé sur une plateforme cloud sécurisée.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800 mb-6">
          <div>
            <span className="font-semibold">CLIENT</span><br />
            Health Care
          </div>
          <div>
            <span className="font-semibold"><IoTimer size={24} className='text-yellow'/> DUREE</span><br />
            02 ans
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h2 className="font-semibold text-gray-700 mb-2">OBJECTIFS</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Optimiser les opérations</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-gray-700 mb-2">SOLUTION</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Développer une plateforme cloud avec TPaaS de niveau entreprise</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-gray-700 mb-2">RESULTATS</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Développement plus rapide</li>
              <li>Réduction des coûts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default EtVous;
