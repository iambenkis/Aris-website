import { Fade } from 'react-awesome-reveal'

const WhySection = () => {
  return (
    <div className=" md:px-20 lg:px-40 pb-10">
      <Fade duration={1000}>
        <h2 className="px-20 font-[RegularNohemi] text-[2.4rem] text-blue-900 text-center font-medium">
          Choisissez COTEKI pour des services excellentes
        </h2>
      </Fade>
      <div className="mt-10">
        <Fade duration={2000} className="w-full">
          <div>
            <div className="grid columns-1  w-full gap-8 lg:flex lg:justify-between lg:items-center bg-yellow-500">
              <div className="w-[100%] lg:w-[30%] border-2 shadow-lg shadow-gray-500/50 bg-white rounded-2xl text-justify p-7">
                <h3 className="text-[1.5rem] font-[RegularNohemi] text-blue-900 font-medium">
                  100% Satisfaction
                </h3>
                <p className="text-[1rem] text-gray-500 mt-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                  illum, inventore et corrupti quas accusantium iste ullam
                  reprehenderit quo eius odit vero exercitationem quos. Numquam
                  eveniet harum accusantium, ratione soluta quidem r !
                </p>
              </div>
              <div className="w-[100%] lg:w-[30%] border-2 shadow-lg shadow-gray-500/50 bg-white rounded-2xl text-justify p-7">
                <h3 className="text-[1.5rem] font-[RegularNohemi] text-blue-900 font-medium">
                  100% Satisfaction
                </h3>
                <p className="text-[1rem] text-gray-500 mt-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                  illum, inventore et corrupti quas accusantium iste ullam
                  reprehenderit quo eius odit vero exercitationem quos. Numquam
                  eveniet harum accusantium, ratione soluta quidem r !
                </p>
              </div>
              <div className="w-[100%] lg:w-[30%] border-2 shadow-lg shadow-gray-500/50 bg-white rounded-2xl text-justify p-7">
                <h3 className="text-[1.5rem] font-[RegularNohemi] text-blue-900 font-medium">
                  100% Satisfaction
                </h3>
                <p className="text-[1rem] text-gray-500 mt-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                  illum, inventore et corrupti quas accusantium iste ullam
                  reprehenderit quo eius odit vero exercitationem quos. Numquam
                  eveniet harum accusantium, ratione soluta quidem r !
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default WhySection
