import React, { useState, useEffect } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from '@material-tailwind/react'

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  )
}

const Carousel = ({ items, autoSlide = false, autoSlideInterval = 3000 }) => {
  // const [activeIndex, setActiveIndex] = useState(0)
  const [curr, setCurr] = useState(0)

  // const prev = () => setCurr(curr === 0 ? items.length - 1 : curr - 1)

  const next = () => setCurr(curr === items.length - 1 ? 0 : curr + 1)

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    console.log('slideInterval', slideInterval)
    return () => clearInterval(slideInterval)
  }, [curr, autoSlideInterval])

  return (
    <div className="flex w-full space-between overflow-hidden relative py-20">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex w-full transition-transform duration-1000 ease-out "
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          <div className="px-40 w-screen">
            <Card
              color="transparent"
              shadow={false}
              className="flex flex-col justify-between items-center border px-10"
            >
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
              >
                <Avatar
                  size="lg"
                  variant="circular"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="tania andrew"
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      {item.name} {` `}
                    </Typography>
                    <div className="5 flex items-center gap-0">
                      {` `}
                      {[...Array(item.rating)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                  </div>
                  <Typography color="blue-gray">{item.job}</Typography>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography> {item.testimony}</Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      ))}
      <div className="absolute bottom-5 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-black rounded-full
              ${curr === i ? 'p-2' : 'bg-opacity-50'}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
