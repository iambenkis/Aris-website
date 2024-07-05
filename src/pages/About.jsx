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
      <div className="mt-40 md:px-20 px-10 mb-5">
        <div className="md:px-40 px-0 flex md:flex-row flex-col justify-between">
          <h1 className="text-blue-900 font-[RegularNohemi] font-medium text-6xl">
            Notre histoire
          </h1>
          <p className="text-justify text-zinc-400 md:w-[50%] pt-4">
            Chez COTEKI, nous sommes spécialisés dans l'énergie solaire,
            l'industrialisation, les télécommunications, les moteurs diesel, la
            soudure, la menuiserie et la construction. Notre engagement envers
            la durabilité et la créativité transforme les matériaux quotidiens
            en lampes modernes, lustres et plus encore. Nous fournissons des
            installations solaires de pointe, des solutions industrielles et
            télécom robustes, ainsi qu'un travail précis sur les moteurs diesel,
            tout en mettant en avant un savoir-faire exceptionnel en menuiserie
            et construction. COTEKI intègre des solutions avancées dans divers
            secteurs, garantissant à nos clients des produits et services de
            premier ordre, où l'innovation et la qualité sont toujours à portée
            de main.
          </p>
        </div>
        <div>
          {/* 4 Pictures galleries */}
          <div className="grid md:grid-cols-4 gap-4 mt-10">
            <div className="w-full h-[300px] bg-gray-300"></div>
            <div className="w-full h-[300px] bg-gray-300"></div>
            <div className="w-full h-[300px] bg-gray-300"></div>
            <div className="w-full h-[300px] bg-gray-300"></div>
            <div className="w-full h-[300px] bg-gray-300"></div>
            <div className="w-full h-[300px] bg-gray-300"></div>
            <div className="w-full h-[300px] bg-gray-300"></div>
            <div className="w-full h-[300px] bg-gray-300"></div>
          </div>
        </div>
      </div>
      <SectionFooter />
    </div>
  )
}

export default About
