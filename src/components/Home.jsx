import { Fade, Slide } from 'react-awesome-reveal'
import HomeImage from '../assets/home.png'

const Home = () => {
  return (
    <div className="w-full h-screen flex items-center pt-[5rem]">
      <div className="flex w-full justify-between items-center px-[10rem]">
        <Slide duration={1000}>
          <div>
            <h1 className="text-[2.7rem] font-[RegularNohemi] font-medium text-blue-900 leading-tight">
              Installation electrique avec standard international
            </h1>
            <div>
              <a href="/">
                <button className="bg-blue-900 text-white text-sm uppercase px-5 py-2 rounded-full mt-5 hover:bg-gradient-to-r from-purple-500 to-pink-500">
                  Nos Solutions
                </button>
              </a>
              <a href="/" className="ml-4">
                <button className=" border-[1px] border-gray-300 text-blue-900 text-sm uppercase px-5 py-2 rounded-full mt-5 hover:bg-gradient-to-r from-purple-500 to-pink-500">
                  Contactez-nous
                </button>
              </a>
            </div>
          </div>
        </Slide>
        <Fade delay={1500}>
          <img src={HomeImage} alt="home" className="w-[100%]" />
        </Fade>
      </div>
    </div>
  )
}

export default Home
