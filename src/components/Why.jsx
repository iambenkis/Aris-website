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
            <div className="grid columns-1  w-full gap-8 lg:flex lg:justify-between lg:items-center ">
              <div className="w-[90%] mx-auto md:w-[100%] lg:w-[30%] border-2 shadow-lg shadow-gray-500/50 bg-white rounded-2xl text-justify p-7">
                <h3 className="text-[1.5rem] font-[RegularNohemi] text-blue-900 font-medium">
                  Simplification des projets électriques
                </h3>
                <p className="text-[1rem] text-gray-500 mt-3">
                  Les projets électriques peuvent être complexes et
                  chronophages. COTEKI vous permet de répondre aux besoins
                  simplifiés de vos projets d\'électricité grâce à une
                  planification et une exécution efficaces.
                </p>
              </div>
              <div className="w-[90%] mx-auto md:w-[100%] lg:w-[30%] border-2 shadow-lg shadow-gray-500/50 bg-white rounded-2xl text-justify p-7">
                <h3 className="text-[1.5rem]  font-[RegularNohemi] text-blue-900 font-medium">
                  Excellence dans l'orientation et la réalisation
                </h3>
                <p className="text-[1rem] text-gray-500 mt-3">
                  Il est souvent difficile de garantir l\'excellence dans
                  l\'orientation et la réalisation des projets. COTEKI assure
                  l\'excellence dans l\'orientation, le dimensionnement et la
                  réalisation de vos projets, vous offrant des solutions
                  précises et de haute qualité.
                </p>
              </div>
              <div className="w-[90%] mx-auto md:w-[100%] lg:w-[30%] border-2 shadow-lg shadow-gray-500/50 bg-white rounded-2xl text-justify p-7">
                <h3 className="text-[1.5rem] font-[RegularNohemi] text-blue-900 font-medium">
                  Cohésion et respect des normes
                </h3>
                <p className="text-[1rem] text-gray-500 mt-3">
                  Les projets peuvent manquer de cohésion et ne pas respecter
                  les normes technologiques. COTEKI réalise vos projets en
                  assurant une bonne cohésion et en respectant les normes des
                  nouvelles technologies, garantissant des résultats conformes
                  et fiables.
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
