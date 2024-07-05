import React from 'react'
import { SectionFooter } from './Solutions'

const About = () => {
  return (
    <div>
      <div className="md:pt-60 pt-40 pb-40 bg-blue-gray-50">
        <div className="md:pl-60 px-10 md:w-[50%] ">
          <h1 className="text-blue-900  font-[RegularNohemi] font-medium text-4xl md:text-5xl">
            Notre Mission ?
          </h1>
          <p className="text-zinc-400 text-sl text-justify">
            Nous sommes une maison technique de production et des installations
            spécialisées dans le solaire , l’industrialisation, la
            télécommunication et nous intervenons sur le moteur diesel , nous
            œuvrons aussi dans la soudure (ajustage), la menuiserie ,
            construction. Nous faisons des lampes modernes avec des sachets ,
            lampes à pétrole , bois , filtre à air pour la conception de
            lustres, applique muraille, abat jour , lampes salon,…
          </p>
        </div>
      </div>
      <SectionFooter />
    </div>
  )
}

export default About
