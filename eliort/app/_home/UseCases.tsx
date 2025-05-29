import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaIndustry, FaMoneyBillTrendUp } from 'react-icons/fa6'
import { MdOutlineArrowUpward, MdOutlineArrowDownward } from 'react-icons/md'
import { FaFileInvoiceDollar, FaLaptopCode, FaMobileAlt, FaRobot, FaServer, FaTags } from 'react-icons/fa'
import { Button } from '@/components/ui/button'








const useCases = [
  {
    id: 1,
    icon: <FaIndustry className="text-3xl text-[#6B21A8]" />,
    title: 'Digitalisation de la production',
    client: 'Client : TechFab Industries',
    result: [
      { label: 'Productivité', value: '+25%', type: 'up' },
      { label: 'Coûts opérationnels', value: '-18%', type: 'down' }
    ],
    description:
      'Mise en place d’un système d’automatisation des processus de fabrication avec analyse en temps réel des performances.',
  },
  {
    id: 2,
    icon: <FaMoneyBillTrendUp className="text-3xl text-[#EA580C]" />,
    title: 'Optimisation comptable',
    client: 'Client : Finora Group',
    result: [
      { label: 'Temps de traitement', value: '-60%', type: 'down' },
      { label: 'Fiabilité des données', value: '+40%', type: 'up' }
    ],
    description:
      'Automatisation complète de la gestion comptable avec algorithmes de vérification intégrés.',
  },

  {
    id: 3,
    icon: <FaLaptopCode className="text-3xl text-[#16A34A]" />,
    title: 'Refonte site web institutionnel',
    client: 'Client : Cabinet Avocat & Associés',
    result: [
      { label: 'Visibilité web', value: '+60%', type: 'up' },
      { label: 'Leads entrants', value: '+35%', type: 'up' },
    ],
    description:
      'Refonte complète du site web avec SEO, accessibilité et version mobile optimisée.',
  },
  {
    id: 4,
    icon: <FaMobileAlt className="text-3xl text-[#0E2148]" />,
    title: 'Application mobile pour la logistique',
    client: 'Client : EasyTrack Africa',
    result: [
      { label: 'Réclamations clients', value: '-40%', type: 'down' },
      { label: 'Satisfaction utilisateurs', value: '+45%', type: 'up' },
    ],
    description:
      'Développement d’une application de suivi en temps réel pour les colis avec alertes intelligentes.',
  },
  {
    id: 5,
    icon: <FaFileInvoiceDollar className="text-3xl text-[#DC2626]" />,
    title: 'Automatisation comptable',
    client: 'Client : Cabinet Odess',
    result: [
      { label: 'Temps de traitement', value: '-70%', type: 'down' },
      { label: 'Précision des écritures', value: '+50%', type: 'up' },
    ],
    description:
      'Mise en place d’un système de traitement automatique des factures et génération des bilans.',
  },
  {
    id: 6,
    icon: <FaRobot className="text-3xl text-[#0E2148]" />,
    title: 'Intégration d’IA dans les ventes',
    client: 'Client : ShopTech B2B',
    result: [
      { label: 'Taux de conversion', value: '+48%', type: 'up' },
      { label: 'Temps de réponse client', value: '-55%', type: 'down' },
    ],
    description:
      'Implémentation de chatbots intelligents pour automatiser les réponses commerciales et améliorer les conversions.',
  },
  {
    id: 7,
    icon: <FaServer className="text-3xl text-[#0E2148]" />,
    title: 'Pipeline de données Big Data',
    client: 'Client : AgriData France',
    result: [
      { label: 'Délais d’analyse', value: '-65%', type: 'down' },
      { label: 'Fréquence des mises à jour', value: '+80%', type: 'up' },
    ],
    description:
      'Développement de pipelines pour la collecte, le nettoyage et la visualisation en temps réel de données agricoles.',
  },
  {
  id: 8,
  icon: <FaServer className="text-3xl text-[#4338CA]" />,
  title: 'Maintenance prédictive',
  client: 'Client : Usine SmartSteel',
  result: [
    { label: 'Temps d’arrêt machine', value: '-50%', type: 'down' },
    { label: 'Durée de vie des équipements', value: '+30%', type: 'up' },
  ],
  description:
    'Installation de capteurs IoT couplés à une IA prédictive pour anticiper les pannes critiques et optimiser la production.',
},
{
  id: 9,
  icon: <FaFileInvoiceDollar className="text-3xl text-[#0E2148]" />,
  title: 'Scoring clients en temps réel',
  client: 'Client : Banque TrustFin',
  result: [
    { label: 'Taux de défaut', value: '-25%', type: 'down' },
    { label: 'Réactivité d’octroi de crédit', value: '+55%', type: 'up' },
  ],
  description:
    'Développement d’un moteur de scoring intelligent basé sur l’analyse comportementale et les historiques bancaires.',
},
 {
id: 10,
  icon: <FaTags className="text-3xl text-[#0F766E]" />, // couleur teal sombre
  title: 'Annotation de données pour l’IA',
  client: 'Client : AutoVision AI',
  result: [
    { label: 'Précision des modèles', value: '+38%', type: 'up' },
    { label: 'Temps de traitement des images', value: '-45%', type: 'down' },
  ],
  description: `Mise en place d’une plateforme d’annotation sur mesure pour entraîner des modèles de reconnaissance d’image dans le secteur automobile (détection de piétons, feux de signalisation, marquages au sol).
  Utilisation de workflows semi-automatisés pour augmenter la vitesse et réduire le coût de labellisation.`,
}

]

const UseCaseCard = () => {
  return (
    <section className="py-12 px-6 my-20 ">
      <h2 className="text-3xl font-bold mb-8 text-[#0E2148]">Études de cas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {useCases.map((useCase) => (
          <Card key={useCase.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="flex items-center gap-4">
              {useCase.icon}
              <div>
                <CardTitle className="text-xl">{useCase.title}</CardTitle>
                <p className="text-sm text-gray-500">{useCase.client}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">{useCase.description}</p>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {useCase.result.map((r, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {r.type === 'up' ? (
                      <MdOutlineArrowUpward className="text-green-600" />
                    ) : (
                      <MdOutlineArrowDownward className="text-red-600" />
                    )}
                    <div>
                      <p className="text-sm font-semibold">{r.label}</p>
                      <p className={`text-base font-bold ${r.type === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {r.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button className='mt-6 cursor-pointer'>Voir plus...</Button>
    </section>
  )
}

export default UseCaseCard
