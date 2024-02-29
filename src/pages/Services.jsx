import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Progress,
} from '@material-tailwind/react'
import React, { useState } from 'react'
import { SectionFooter } from './Solutions'

const works = [
  {
    number: '01',
    title: 'We aggregate data from 500M+ data points (that you can count on)',
  },
  {
    number: '02',
    title: 'We aggregate data from 500M+ data points (that you can count on)',
  },
  {
    number: '03',
    title: 'We aggregate data from 500M+ data points (that you can count on)',
  },
  {
    number: '04',
    title: 'We aggregate data from 500M+ data points (that you can count on)',
  },
]

const Services = () => {
  return (
    <div className="py-40 px-40">
      <div className="flex w-full relative">
        <div className="w-full ">
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
        </div>

        <div className="w-[60%] ml-2 text-justify">
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
      <div>
        <h2 className="mb-7 py-20 text-center text-blue-900 font-[RegularNohemi] font-medium  text-4xl">
          Nos beneficiaires
        </h2>
        <div className="pb-10">
          <div>
            <div className="w-full flex justify-center items-center ">
              <div className="w-[45%] mr-5">
                <div className=" flex-col px-10 py-10 border-[1px] border-gray-800/25 flex mr-1 mb-5 rounded-xl">
                  <p className="text-xl"> ⏲</p>
                  <h3 className="pt-5 text-blue-900 font-[RegularNohemi] font-medium  text-sm">
                    SEARCH, DISCOVER AND BUILD COMPELLING BUSINESS CASES IN ONE
                    PLATFORM
                  </h3>
                  <h4 className="pt-5 text-blue-900 font-[RegularNohemi] font-medium  text-4xl">
                    R&D and Innovation Teams
                  </h4>
                  <p className="leading-7 text-blue-800  py-5">
                    {' '}
                    Say goodbye to siloed data and misaligned intelligence
                    tools. With one search, visualize 500M+ data points from
                    global patent activity, scientific literature, commercial
                    players, market news, key opinion leaders, and more in our
                    Innovation Dashboard, alongside specialized GPT-powered
                    insights to help you quickly uncover unique trends within
                    the data. Identify whitespace, ideate new concepts, and
                    monitor important data points with ease. Search, discover,
                    track, then repeat—all in one platform.
                  </p>
                </div>
                <div className=" flex-col px-10 py-10 border-[1px] border-gray-800/25 flex mr-1 mb-5 rounded-xl">
                  <p className="text-xl"> ⏲</p>
                  <h3 className="pt-5 text-blue-900 font-[RegularNohemi] font-medium  text-sm">
                    SEARCH, DISCOVER AND BUILD COMPELLING BUSINESS CASES IN ONE
                    PLATFORM
                  </h3>
                  <h4 className="pt-5 text-blue-900 font-[RegularNohemi] font-medium  text-4xl">
                    R&D and Innovation Teams
                  </h4>
                  <p className="leading-7 text-blue-800  py-5">
                    {' '}
                    Say goodbye to siloed data and misaligned intelligence
                    tools. With one search, visualize 500M+ data points from
                    global patent activity, scientific literature, commercial
                    players, market news, key opinion leaders, and more in our
                    Innovation Dashboard, alongside specialized GPT-powered
                    insights to help you quickly uncover unique trends within
                    the data. Identify whitespace, ideate new concepts, and
                    monitor important data points with ease. Search, discover,
                    track, then repeat—all in one platform.
                  </p>
                </div>
              </div>

              <div className=" w-[45%] px-10 flex flex-col  py-10 border-[1px] border-gray-800/25  mr-1 mb-5 rounded-xl">
                <p className="text-xl"> ⏲</p>
                <h3 className="pt-5 text-blue-900 font-[RegularNohemi] font-medium  text-sm">
                  SEARCH, DISCOVER AND BUILD COMPELLING BUSINESS CASES IN ONE
                  PLATFORM
                </h3>
                <h4 className="pt-5 text-blue-900 font-[RegularNohemi] font-medium  text-4xl">
                  R&D and Innovation Teams
                </h4>
                <p className="leading-7 text-blue-800  py-5">
                  {' '}
                  Say goodbye to siloed data and misaligned intelligence tools.
                  With one search, visualize 500M+ data points from global
                  patent activity, scientific literature, commercial players,
                  market news, key opinion leaders, and more in our Innovation
                  Dashboard, alongside specialized GPT-powered insights to help
                  you quickly uncover unique trends within the data. Identify
                  whitespace, ideate new concepts, and monitor important data
                  points with ease. Search, discover, track, then repeat—all in
                  one platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mb-7 pt-10 text-center text-blue-900 font-[RegularNohemi] font-medium  text-4xl">
          Avec Coteki
        </h2>
        <div className=" w-full grid grid-rows-2 px-40 grid-flow-col gap-4">
          <div className="transition ease-in-out delay-150 px-5 py-10 border-[1px] border-gray-800/25 flex mr-1 mb-5 rounded-xl hover:bg-white duration-300 hover:drop-shadow-xl">
            <p> ⏲</p>
            <p className="ml-2">
              {' '}
              Turn 2 weeks worth of <br /> research into 15 minutes
            </p>
          </div>
          <div className="transition ease-in-out delay-150 px-5 py-10 border-[1px] border-gray-800/25 flex mr-1 mb-5 rounded-xl hover:bg-white duration-300 hover:drop-shadow-xl">
            <p> ⏲</p>
            <p className="ml-2">
              {' '}
              Turn 2 weeks worth of <br /> research into 15 minutes
            </p>
          </div>
          <div className="transition ease-in-out delay-150 px-5 py-10 border-[1px] border-gray-800/25 flex mr-1 mb-5 rounded-xl hover:bg-white duration-300 hover:drop-shadow-xl">
            <p> ⏲</p>
            <p className="ml-2">
              {' '}
              Turn 2 weeks worth of <br /> research into 15 minutes
            </p>
          </div>
          <div className="transition ease-in-out delay-150 px-5 py-10 border-[1px] flex mr-1 border-gray-800/25 mb-5 rounded-xl hover:bg-white duration-300 hover:drop-shadow-xl">
            <p> ⏲</p>
            <p className="ml-2">
              {' '}
              Turn 2 weeks worth of <br /> research into 15 minutes
            </p>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <div className="flex relative w-full justify-between">
          <h2 className="w-[30%] mb-7 pt-10  text-blue-900 font-[RegularNohemi] font-medium  text-4xl">
            Comment Nous travaillons
          </h2>
          <div className="w-[60%] mt-10">
            {works.map((work, index) => (
              <div className="work w-full mb-10 border-[1px]  border-gray-900/25 px-10 pt-5  flex justify-center items-center rounded-xl">
                <h3 className="text-8xl font-bold leading-4 font-[RegularNohemi] py-20 mr-20 stroke-text">
                  {work.number}
                </h3>
                <p className="text-blue-900">{work.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SectionFooter />
    </div>
  )
}

export default Services
