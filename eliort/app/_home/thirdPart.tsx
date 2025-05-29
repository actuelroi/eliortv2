import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { AiOutlineRobot } from 'react-icons/ai'
import {  FaRegLightbulb, FaTools } from 'react-icons/fa'
import { GiFactory } from 'react-icons/gi'
import { MdSupportAgent } from 'react-icons/md'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

const services = [
  {
    id: 1,
    Icon: <FaRegLightbulb className="text-3xl text-[#0E2148]" />,
    service: 'Services de Conseil',
    description: 'Des stratégies avancées pour accompagner vos décisions et optimiser vos actions.'
  },
  {
    id: 2,
    Icon: <FaTools className="text-3xl text-[#0E2148]" />,
    service: 'Technologie & Ingénierie',
    description: 'Conception de solutions techniques, développement logiciel, ingénierie système et outils d’analyse sur mesure.'
  },
  {
    id: 3,
    Icon: <MdSupportAgent className="text-3xl text-[#0E2148]" />,
    service: 'Externalisation & Services Gérés',
    description: 'Gestion opérationnelle de vos systèmes, assistance, support et pilotage externalisé.'
  },
  {
    id: 4,
    Icon: <GiFactory className="text-3xl text-[#0E2148]" />,
    service: 'Solutions Sectorielles',
    description: 'Approches ciblées pour chaque industrie : santé, finance, énergie, logistique...'
  },
  {
    id: 5,
    Icon: <AiOutlineRobot className="text-3xl text-[#0E2148]" />,
    service: 'IA & Intégration de Données',
    description: 'Mise en œuvre de l’intelligence artificielle et valorisation de la donnée.'
  },
  {
    id: 6,
    Icon: <RiMoneyDollarCircleLine className="text-3xl text-[#0E2148]" />,
    service: 'Finance & Comptabilité',
    description: 'Optimisation comptable, automatisation financière et reporting stratégique.'
  },
]

const ThirdPart = () => {
  return (
    <section className="px-6 py-10 p-6 md:p-12 mt-30">
      <div className='mb-20'>
        <h1 className="text-3xl font-semibold mb-6 text-[#0E2148]">Nos services</h1>
        <div className="flex flex-wrap gap-6 justify-between">
          {services.map((item) => (
            <Card key={item.id} className="w-full md:w-[30%] shadow-md hover:shadow-lg transition-all cursor-pointer">
              <CardHeader className="flex flex-row items-center gap-3">
                <div>{item.Icon}</div>
                <CardTitle className="text-lg font-semibold">{item.service}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className='mt-30 p-8 py-10 rounded-md flex flex-row justify-between items-center bg-[#0E2148]'>
        <h1 className='text-3xl font-semibold text-white'>Explorez notre offre de services pour développer votre activité.</h1>
        <Button className='text-[#000] bg-white cursor-pointer hover:bg-white hover:scale-120 transition-all'>Explorez nos services</Button>
      </div>
    </section>
  )
}

export default ThirdPart
