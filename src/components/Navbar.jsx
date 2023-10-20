import { MdElectricalServices } from 'react-icons/md'

const Navbar = () => {
  const links = [
    { name: 'solutions', href: '/solutions' },
    { name: 'services', href: '' },
    { name: 'A propos', href: '' },
    { name: 'contact', href: '' },
  ]
  return (
    <nav className="w-full bg-neutral-100/75 backdrop-blur-md fixed top-0 left-0 flex justify-between px-[5rem] py-5 z-10">
      <a
        href="/"
        className="w-full text-2xl flex items-center text-blue-900 font-bold flex-row"
      >
        <MdElectricalServices />
        <span>COTEKI</span>
      </a>
      <ul className="flex w-[50%] justify-between">
        {links.map((link, index) => (
          <li>
            <a
              href={`${link.href}`}
              className={`text-blue-900 uppercase text-xs font-link ${
                link.name === 'contact'
                  ? 'bg-blue-900 text-white px-3 py-2 rounded-full border-[1px] border-red-900'
                  : ''
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
