import { MdElectricalServices } from 'react-icons/md'

const Footer = () => {
  const links = [
    { name: 'solutions', href: '' },
    { name: 'services', href: '' },
    { name: 'A propos', href: '' },
    { name: 'contact', href: '' },
  ]
  return (
    <footer className="w-full bg-neutral-200 px-20">
      <div className="w-full p-2 flex flex-col py-10 justify-center items-center">
        <a
          href="/"
          className="text-4xl flex items-center mb-4 text-blue-900 font-bold flex-row"
        >
          <MdElectricalServices />
          <span>COTEKI</span>
        </a>
        <ul className="flex w-[30%] justify-between items-center ">
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
        <div className="w-full flex text-gray-400 font-link font-medium pt-5 justify-between border-t-[1px] border-indigo-500">
          <p className="">© 2021 - Todos los derechos reservados</p>
          <p>Privacy Policy Terms & Conditions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
