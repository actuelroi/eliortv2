import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Eliort</h2>
          <p className="text-sm">
            Nous accompagnons les entreprises avec des solutions concrètes : transformation digital, gestion comptable, automatisation par l&apos;IA, labellisation de données, intégration cloud , développement de pipelines métiers et bien plus encore .
          </p>
        </div>

        {/* À propos */}
        <div>
          <h3 className="text-lg font-semibold mb-3">À propos</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Notre équipe</a></li>
            <li><a href="#" className="hover:underline">Carrières</a></li>
            <li><a href="#" className="hover:underline">Presse</a></li>
            <li><a href="#" className="hover:underline">Nos engagements</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Centre d&apos;aide</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Nous contacter</a></li>
            <li><a href="#" className="hover:underline">Politique de confidentialité</a></li>
          </ul>
        </div>

        {/* Suivez-nous */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Suivez-nous</h3>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" aria-label="Facebook"><FaFacebookF className="hover:text-white" /></a>
            <a href="#" aria-label="Twitter"><FaTwitter className="hover:text-white" /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn className="hover:text-white" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Eliort. Tous droits réservés.
      </div>
    </footer>
  )
}

export default Footer
