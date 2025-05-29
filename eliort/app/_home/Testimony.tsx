import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const testimonials = [
  {
    name: 'Sophie Durand',
    role: 'Directrice Marketing',
    company: 'NeoMarket',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: `Eliort nous a permis de prendre des décisions fondées sur des données concrètes. Leur analyse a transformé notre stratégie digitale.`,
  },
  {
    name: 'Marc Lefevre',
    role: 'Responsable IT',
    company: 'FinTrust Bank',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: `L'intégration de l'IA par Eliort a révolutionné notre manière de gérer les données clients.`,
  },
  {
    name: 'Claire Morel',
    role: 'Fondatrice',
    company: 'StartEduTech',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: `Grâce à leur accompagnement, nous avons développé une application mobile performante et adaptée à nos besoins pédagogiques.`,
  },
  {
    name: 'Jean-Baptiste Roux',
    role: 'Directeur Opérations',
    company: 'IndusProTech',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    quote: `Eliort a mis en place un pipeline de données robuste pour notre chaîne industrielle. Résultat : -25% de pertes et +18% d’efficacité.`,
  },
  {
  name: 'Nadia Bellamy',
  role: 'Responsable Administrative et Financière',
  company: 'Groupe Saphir',
  image: 'https://randomuser.me/api/portraits/women/39.jpg',
  quote: `Grâce à Eliort, nous avons automatisé notre gestion comptable avec précision. Les erreurs ont diminué de 40 % et le traitement des factures est devenu 2 fois plus rapide.`,
}
]

const Testimony = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Témoignages de nos clients</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-all bg-gray-50">
              <p className="italic text-gray-700 mb-4">“{testimonial.quote}”</p>
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 rounded-full overflow-hidden">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role} – {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimony
