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

export const victrines = [
  {
    title: 'Installation domestique et industrielle.',
    description: `L'installation d'énergies renouvelables domestiques et
              industrielles, telle que le solaire et l'éolien, est essentielle
              pour un avenir durable. Le dimensionnement, l'installation, le
              monitoring et la maintenance réduisent l'empreinte carbone, tout
              en nécessitant une gestion experte des ressources et une
              efficacité énergétique maximale.`,
    image: ElecImage,
  },
  {
    title:
      'Savoir-faire en Mécanique: Soudure, Ajustage et Conception de Pointe',
    description: `La mécanique est un domaine complexe impliquant la soudure, 
      l'ajustage et la conception de moteurs diesel. Cette discipline exige 
      une expertise en ingénierie pour garantir la performance, la fiabilité et 
      l'efficacité énergétique des moteurs, ainsi que leur maintenance et réparation précises.`,
    image: MechaImage,
  },
  {
    title: 'Optimisation des Performances en Télécommunications',
    description: `Dans le secteur des télécommunications, la programmation des 
      produits Victron, des batteries lithium et des antennes réseau est cruciale. 
      Cette programmation précise garantit une alimentation fiable, 
      une longue autonomie et une connectivité stable, contribuant ainsi à 
      l'efficacité et à la fiabilité des réseaux de communication.`,
    image: TelecomImage,
  },
]

export const isOdd = (num) => num % 2

const Insight = () => {
  // max-w-[50rem]

  return (
    <div className="px-40 py-20 z-0">
      <div>
        {victrines.map((victrine, index) => (
          <Card
            className={`bg-gray-100 w-full ${
              isOdd(index) ? 'flex-row-reverse' : 'flex-row'
            }   border-none shadow-none mb-20`}
          >
            <CardBody className="flex flex-col py-20 justify-center border-none">
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
              <a href="/solutions" className="inline-block">
                <Button
                  variant="text"
                  className="flex items-center gap-2 border-[1px] border-gray-800/25 rounded-full"
                >
                  Learn More
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
            </CardBody>
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-[45%] relative bg-gray-800/25 shadow-inner shadow-inner-lg border-[1px] shrink-0"
            >
              <div className="w-full h-full  py-20">
                <img
                  src={victrine.image}
                  alt="card-1"
                  className="absolute top-0 left-0 h-full w-full object-cover"
                />
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Insight
