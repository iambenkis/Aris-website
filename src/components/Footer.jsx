import { MdElectricalServices } from 'react-icons/md'

const Footer = () => {
  const links = [
    { name: 'solutions', href: '' },
    { name: 'services', href: '' },
    { name: 'A propos', href: '' },
    { name: 'contact', href: '' },
  ]
  return (
    <footer className="w-full bg-gray-400/50 md:px-20 px-5">
      <div className="w-full p-2 flex flex-col py-10 justify-center items-center">
        <a
          href="/"
          className="text-4xl flex items-center mb-4 text-blue-900 font-bold flex-row"
        >
          <MdElectricalServices />
          <span>COTEKI</span>
        </a>
        <ul className="flex w-[50%] md:w-[30%] flex-col md:flex-row justify-between items-center ">
          {links.map((link, index) => (
            <li className="">
              <a
                href={`${link.href}`}
                className={`text-blue-900 font-bold uppercase text-xs font-link `}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full   pb-20">
        <div className="w-full flex flex-col md:flex-row text-gray-400 font-link font-medium pt-5 justify-between border-t-[1px] border-gray-400/25">
          <p className="py-5  ">© 2023 COTEKI. Tous droits réservés.</p>
          <p>
            Politique de confidentialité & conditions générales d'utilisation
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
