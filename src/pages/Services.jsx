import { Button } from '@material-tailwind/react'
import React from 'react'
import { SectionFooter } from './Solutions'
import { Fade, Slide, Zoom } from 'react-awesome-reveal'

const works = [
  {
    number: '01',
    title:
      'Services électriques : Solutions fiables et professionnelles pour vos besoins',
  },
  {
    number: '02',
    title:
      'Services télécom : Assurer des systèmes de communication robustes et sans faille',
  },
  {
    number: '03',
    title:
      'Services mécaniques : Ingénierie de précision et maintenance pour des performances optimales',
  },
  {
    number: '04',
    title:
      'Solutions intégrées : Support complet pour les projets électriques, télécoms et mécaniques',
  },
]

const Services = () => {
  return (
    <div className="py-20 px-3 md:py-40 md:px-40">
      <div className="flex w-full flex-col md:flex-row relative">
        <div className="w-full ">
          <Slide>
            <h1 className="mb-2 text-blue-900 font-[RegularNohemi] font-medium  text-4xl">
              Coteki, pour <br /> des solutions divers.
            </h1>
            <p className="text-blue-900/50">
              Prendre des décisions stratégiques basées sur des informations
              exploitables
            </p>
            <a href="/solutions" className="inline-block mt-2">
              <Button
                variant="text"
                className="flex items-center gap-2 border-[1px] rounded-full bg-blue-900 text-white hover:bg-white hover:text-blue-900 hover:border-blue-900"
              >
                Nos solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </Slide>
        </div>

        <div className=" w-[90%] mt-4 md:mt-0 md:w-[60%] ml-2 text-justify">
          <Fade delay={1000}>
            <p className="mb-5">
              Avec Coteki, les entreprises atteignent l'excellence dans les
              installations électriques et les normes de service, garantissant
              des performances de haute qualité et une satisfaction client
              exceptionnelle.
            </p>
            <a href="/contact" className="inline-block">
              <Button
                variant="text"
                className="flex items-center gap-2 border-[1px] rounded-full bg-blue-900 text-white hover:bg-white hover:text-blue-900 hover:border-blue-900"
              >
                Contactez-nous
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </Fade>
        </div>
      </div>
      <Slide>
        <div>
          <h2 className="mb-7 py-20 text-center text-blue-900 font-[RegularNohemi] font-medium  text-4xl">
            Nos beneficiaires
          </h2>
          <div className="pb-3 md:pb-10">
            <div>
              <div className="w-full flex flex-col md:flex-row justify-center items-center ">
                <div className="w-full md:w-[45%] md:mr-5">
                  <div className=" flex-col px-10 py-10 border-[1px] border-gray-800/25 flex md:mr-1 mb-5 rounded-xl">
                    <p className="text-xl"> ⏲</p>
                    <h3 className="pt-5 uppercase text-blue-900 font-[RegularNohemi] font-medium  text-sm">
                      Solutions robustes et fiables pour les environnements
                      industriels
                    </h3>
                    <h4 className="pt-5 text-blue-900 font-[RegularNohemi] font-medium  text-4xl">
                      Secteur Industiels
                    </h4>
                    <p className="leading-7 text-blue-800  py-5">
                      {' '}
                      Nos services répondent aux exigences des environnements
                      industriels, garantissant productivité et sécurité. Nous
                      proposons des solutions robustes et fiables pour les
                      systèmes électriques, télécoms et mécaniques, assurant une
                      performance optimale et une maintenance efficace pour les
                      installations industrielles.
                    </p>
                  </div>
                  <div className=" flex-col px-10 py-10 border-[1px] border-gray-800/25 flex md:mr-1 mb-5 rounded-xl">
                    <p className="text-xl"> ⏲</p>
                    <h3 className="pt-5 uppercase text-blue-900 font-[RegularNohemi] font-medium  text-sm">
                      Optimisation de l'efficacité et de la performance des
                      entreprises
                    </h3>
                    <h4 className="pt-5 text-blue-900 font-[RegularNohemi] font-medium  text-4xl">
                      Entreprises commerciales
                    </h4>
                    <p className="leading-7 text-blue-800  py-5">
                      {' '}
                      Nous aidons les entreprises commerciales à maintenir des
                      opérations fluides avec des systèmes électriques et de
                      télécommunications fiables. Nos solutions sont conçues
                      pour optimiser l\'efficacité et la performance, minimisant
                      les temps d\'arrêt et maximisant la productivité.
                    </p>
                  </div>
                </div>

                <div className=" w-full md:w-[45%] px-10 flex flex-col  py-10 border-[1px] border-gray-800/25  mr-1 mb-5 rounded-xl">
                  <p className="text-xl"> ⏲</p>
                  <h3 className="pt-5 uppercase text-blue-900 font-[RegularNohemi] font-medium  text-sm">
                    Sécurité et efficacité énergétique pour votre maison
                  </h3>
                  <h4 className="pt-5 text-blue-900 font-[RegularNohemi] font-medium  text-4xl">
                    Propriétaires résidentiels
                  </h4>
                  <p className="leading-7 text-blue-800  py-5">
                    {' '}
                    Nous offrons des solutions personnalisées pour les
                    propriétaires résidentiels, assurant la sécurité et
                    l\'efficacité énergétique de vos installations électriques.
                    Nos services couvrent l\'installation, la mise à niveau et
                    la maintenance, garantissant un environnement domestique sûr
                    et fonctionnel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <div>
        <h2 className="mb-7 pt-10 text-center text-blue-900 font-[RegularNohemi] font-medium  text-4xl">
          Avec Coteki
        </h2>
        <div className=" w-full grid grid-cols-1 md:grid-rows-2 px-3 md:px-40 md:grid-flow-col gap-4">
          <Zoom duration={500}>
            <div className="transition ease-in-out delay-150 px-5 py-10 border-[1px] border-gray-800/25 flex mr-1 mb-5 rounded-xl hover:bg-white duration-300 hover:drop-shadow-xl">
              <p> ⏲</p>
              <p className="ml-2">
                {' '}
                Nos experts assurent une réalisation rapide <br /> de vos
                projets pour respecter vos délais.
              </p>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className="transition ease-in-out delay-150 px-5 py-10 border-[1px] border-gray-800/25 flex mr-1 mb-5 rounded-xl hover:bg-white duration-300 hover:drop-shadow-xl">
              <p> ⏲</p>
              <p className="ml-2">
                {' '}
                Nous proposons des solutions rentables <br /> pour réduire vos
                coûts avec une qualité garantie.
              </p>
            </div>
          </Zoom>
          <Zoom duration={500} delay={1000}>
            <div className="transition ease-in-out delay-150 px-5 py-10 border-[1px] border-gray-800/25 flex mr-1 mb-5 rounded-xl hover:bg-white duration-300 hover:drop-shadow-xl">
              <p> ⏲</p>
              <p className="ml-2">
                {' '}
                Notre équipe est disponible 24/7 <br /> pour offrir un support
                technique continu.
              </p>
            </div>
          </Zoom>
          <Zoom duration={500} delay={1500}>
            <div className="transition ease-in-out delay-150 px-5 py-10 border-[1px] flex mr-1 border-gray-800/25 mb-5 rounded-xl hover:bg-white duration-300 hover:drop-shadow-xl">
              <p> ⏲</p>
              <p className="ml-2">
                {' '}
                Des solutions globales en électricité, télécoms
                <br /> et mécanique pour une gestion de projet cohérente.
              </p>
            </div>
          </Zoom>
        </div>
      </div>
      <div className="pt-20">
        <div className="flex relative w-full justify-between flex-col md:flex-row">
          <h2 className="w-full md:w-[30%] mb-7 pt-10  text-blue-900 font-[RegularNohemi] font-medium  text-4xl">
            Comment Nous travaillons
          </h2>
          <div className="w-full md:w-[60%] mt-3 md:mt-10">
            {works.map((work, index) => (
              <Slide>
                <div className="work w-full mb-10 border-[1px]  border-gray-900/25 px-10 pt-5  flex flex-row justify-center items-center rounded-xl">
                  <h3 className="text-6xl text-gray-900/50 font-bold leading-4 font-[RegularNohemi] py-4 mr-4 md:py-20 md:mr-20 md:stroke-text">
                    {work.number}
                  </h3>
                  <p className="text-blue-900">{work.title}</p>
                </div>
              </Slide>
            ))}
          </div>
        </div>
      </div>
      <SectionFooter />
    </div>
  )
}

export default Services
