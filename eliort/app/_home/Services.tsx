
import React from 'react'
import { IoTvSharp } from 'react-icons/io5'
import { LiaIndustrySolid } from 'react-icons/lia'
import { LuBrain } from 'react-icons/lu'
import { TbWorldCheck } from 'react-icons/tb'

const Services = () => {
   

  



  const services = [
    {
      id: 1,
      Icon: <LuBrain size={50} className="text-purple-600" />,
      title: 'Services de Conseil',
      description: 'Eliort fournit des conseils stratégiques à ses clients sur :',
      items: [
        'Transformation numérique',
        'Opérations commerciales',
        'Optimisation',
        'Stratégie informatique',
        'Adoption de la donnée et de l’IA',
        'Migration vers le cloud',
        'Architecture cloud',
      ],
    },
    {
      id: 2,
      Icon: <IoTvSharp size={50} className="text-purple-600" />,
      title: 'Services Technologiques et d’Ingénierie',
      description: 'Nous concevons, développons et implémentons des solutions technologiques :',
      items: [
        'Développement logiciel',
        'Intégration de systèmes',
        'Modernisation informatique',
        'Systèmes embarqués',
        'Services financiers',
        'Industrie manufacturière',
        'Énergie et services publics',
      ],
    },
    {
      id: 3,
      Icon: <TbWorldCheck size={50} className="text-purple-600" />,
      title: 'Externalisation et Services Gérés',
      description: 'Gestion de tout ou partie des opérations informatiques ou métiers, y compris :',
      items: [
        'Gestion des applications (AMS)',
        'Gestion des infrastructures',
        'Opérations cloud',
        'BPO',
        'Services financiers',
        'Secteur public',
        'Industrie manufacturière',
      ],
    },
    {
      id: 4,
      Icon: <LiaIndustrySolid size={50} className="text-purple-600" />,
      title: 'Solutions Spécifiques à l’Industrie',
      description: 'Nous créons des solutions sur mesure pour des secteurs comme :',
      items: [
        'Services financiers',
        'Industrie manufacturière',
        'Énergie et services publics',
        'Cybersécurité',
        'Télécoms & Médias',
        'Électricité',
        'Tourisme',
      ],
    },
  ]

  return (
    <section className=' py-10 flex justify-center '>
      <div className="flex flex-row gap-1 justify-center bg-gray-100 p-4 ">
        {services.map((item) => (
          <div key={item.id} className="flex gap-2 items-start">
            <div>{item.Icon}</div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <p className="mb-4">{item.description}</p>
              <ul className="grid grid-cols-1 list-disc list-inside gap-2 text-sm">
                {item.items.map((point, index) => (
                  <li key={index} className='text-[#5A827E]'>{point}</li>
                ))}
              </ul>
              <h3 className='m-6 cursor-pointer'>Voir plus..</h3>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
