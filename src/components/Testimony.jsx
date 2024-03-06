import Carousel from './Carousel'

/*

//////// COMMENT START ICON FOR FUTURE USAGE

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
*/

const Testimony = () => {
  const items = [
    {
      name: 'Jean Dupont',
      job: 'Ingénieur Électrique',
      testimony:
        "J'ai été extrêmement satisfait des services électriques fournis par cette entreprise. Leur équipe était compétente, efficace et professionnelle tout au long du processus.",
      rating: 5,
    },
    {
      rating: 3,
      name: 'Marie Martin',
      job: 'Ingénieur Mécanique',
      testimony:
        "Je recommande vivement cette entreprise pour tous les services mécaniques. Ils ont fait preuve d'un haut niveau d'expertise et de dévouement, fournissant des résultats exceptionnels dans les délais promis.",
    },
    {
      name: 'Michel Dujardin',
      job: 'Spécialiste des Télécommunications',
      rating: 4,
      testimony:
        "J'ai été impressionné par la qualité des services de télécommunications offerts par cette entreprise. Leur souci du détail et leur engagement envers la satisfaction du client les distinguent vraiment dans l'industrie.",
    },
    {
      name: 'Sophie Leroy',
      job: "Technicienne en Installation d'Antennes",
      rating: 5,
      testimony:
        "En tant que technicienne en installation d'antennes, j'ai collaboré avec cette entreprise sur plusieurs projets. La compétence technique et le professionnalisme de leur équipe ont systématiquement dépassé les attentes.",
    },
  ]
  return (
    <div className="px-40 pb-10 relative">
      <h2 className="px-20 font-[RegularNohemi]  text-[2.4rem] text-blue-900 text-center font-medium">
        Ce que les gens disent de nous
      </h2>
      <p className="font-link text-center font-normal font-pop">
        Découvrez pourquoi les gens parlent avec enthousiasme de notre travail.
        Chez COTEKI, offrir des expériences exceptionnelles est notre
        spécialité, et nous sommes impatients de partager notre expertise avec
        vous.
      </p>
      <div>
        <Carousel items={items} autoSlide={true} />
      </div>
    </div>
  )
}

export default Testimony
