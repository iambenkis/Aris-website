import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react'
import ElecImage from '../assets/elec.png'
import MechaImage from '../assets/mechanic.png'
import TelecomImage from '../assets/telecom.png'
import { victrines } from '../components/Insight'
import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'

export const SectionFooter = () => (
  <Fade duration={2000}>
    <div className="mt-40 mb-5">
      <p className="mb-2 text-center text-blue-900 font-[RegularNohemi] font-medium  text-4xl">
        Avec Coteki, l'excellence devient la norme, la satisfaction devient la
        certitude.
      </p>
      <div className="flex items-center justify-center">
        <a href="/">
          <button className="bg-blue-900 text-white text-sm uppercase px-5 py-2 rounded-full mt-5 hover:bg-gradient-to-r from-purple-500 to-pink-500">
            Nos Services
          </button>
        </a>
        <a href="/" className="ml-4">
          <button className="border-[1px] border-gray-300 text-blue-900 text-sm uppercase px-5 py-2 rounded-full mt-5 hover:text-white hover:bg-gradient-to-r from-purple-500 to-pink-500">
            Contactez-nous
          </button>
        </a>
      </div>
    </div>
  </Fade>
)

const Solutions = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target
    const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100
    setScrollPercentage(percentage.toFixed(2))
  }
  return (
    <div className="py-40 px-40 ">
      <div className="flex w-full relative">
        <h1 className="mb-2 text-blue-900 font-[RegularNohemi] font-medium  text-5xl">
          Optez pour Coteki, améliorez vos systèmes électriques.
        </h1>
        <div className="w-[100%] ml-2 text-justify">
          <p className="mb-5">
            Avec Coteki, les entreprises atteignent l'excellence dans les
            installations électriques et les normes de service, garantissant des
            performances de haute qualité et une satisfaction client
            exceptionnelle.
          </p>
          <a href="/" className="inline-block">
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
        </div>
      </div>

      <div
        className="relative  mt-40 h-screen flex overflow-y-scroll hide-scrollbar  left-0 bg-neutral-300"
        // onScroll={handleScroll}
      >
        <Card
          className={`sticky top-10 w-[40%] h-[60%] flex-row border-none shadow-none mb-20`}
        >
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-full sticky top-0 left-0 bg-gray-800/25 shadow-inner shadow-inner-lg border-[1px] shrink-0"
          >
            <div className="w-full py-20">
              <img
                src={`
                    ${
                      scrollPercentage < 30
                        ? ElecImage
                        : scrollPercentage < 90
                        ? MechaImage
                        : TelecomImage
                    }`}
                alt="card-1"
                className="absolute animate-fade-in top-0 left-0 h-full w-full object-cover"
              />
            </div>
          </CardHeader>
        </Card>
        <div className="cursor-pointer w-[47%] pb-20 pt-10  text-justify flex flex-col ml-10 font-link">
          {victrines.map((victrine, index) => (
            <Card
              className={`w-full last-of-type:pb-40 bg-gray-100 mt- flex-row-reverse border-none shadow-none mb-20`}
            >
              <CardBody className="flex flex-col py-10  justify-center border-none">
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-2 text-blue-900 font-[RegularNohemi] font-medium  text-4xl"
                >
                  {victrine.title}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal font-pop">
                  {victrine.description}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <SectionFooter />
    </div>
  )
}

export default Solutions
