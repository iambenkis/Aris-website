import { useState } from 'react'
import { MdElectricalServices } from 'react-icons/md'

const HamburgerMenu = ({ clickHandler, shown }) => {
  return (
    <button
      className={`${shown ? 'flex' : 'hidden'} flex-col md:hidden`}
      onClick={clickHandler}
    >
      <div className="h-[4px] w-[30px] rounded-[2px] bg-blue-gray-700  m-[1px]"></div>
      <div className="h-[4px] w-[30px] rounded-[2px] bg-blue-gray-700  m-[1px]"></div>
      <div className="h-[4px] w-[30px] rounded-[2px] bg-blue-gray-700  m-[1px]"></div>
    </button>
  )
}

const Navbar = () => {
  const [linksShown, setLinksShown] = useState(false)

  const hamburgerClickHandler = () => {
    setLinksShown(true)
  }

  const linksClickHandler = () => {
    setLinksShown(false)
  }

  const links = [
    { name: 'solutions', href: '/solutions' },
    { name: 'services', href: '/services' },
    { name: 'A propos', href: '/a_propos' },
    { name: 'contact', href: '/contact' },
  ]
  return (
    <nav className="w-full bg-neutral-100/75 backdrop-blur-md fixed top-0 left-0 flex justify-between px-2 md:px-[5rem] py-5 z-10">
      <a
        href="/"
        className={`${
          linksShown ? 'hidden' : 'flex'
        } w-full text-2xl md:flex items-center text-blue-900 font-bold flex-row`}
      >
        <MdElectricalServices />
        <span>COTEKI</span>
      </a>
      <HamburgerMenu clickHandler={hamburgerClickHandler} shown={!linksShown} />
      <ul
        className={` flex-col ${
          linksShown ? ' flex' : 'hidden'
        } md:flex md:flex-row w-[50%] gap-3 md:justify-between px-4`}
      >
        {links.map((link, index) => (
          <li>
            <a
              href={`${link.href}`}
              className={`text-blue-900 uppercase text-xs font-link ${
                link.name === 'contact'
                  ? 'bg-blue-900 text-white px-3 py-2 rounded-full border-[1px] border-red-900'
                  : ''
              }`}
              onClick={linksClickHandler}
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
