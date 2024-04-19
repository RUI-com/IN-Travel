//import Icons
import {CiMenuKebab} from 'react-icons/ci'
import {FaRegUser} from 'react-icons/fa'
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
        <div className="nav__bar">
          <div className="logo nav__logo">
            <a href="#"><Image src='/logo/logo-w-w.svg'  alt="In" width={54} height={29}/></a>
          </div>
          <ul className="nav__links" id="nav-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#equipment">Equipment</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
          <div className="nav__menu__btn" id="menu-btn">
            <CiMenuKebab/>
          </div>
          <div className="nav__action__btn">
            <button className="btn">
              <span><FaRegUser/></span> Account
            </button>
          </div>
        </div>
      </nav>
  )
}

export default Navbar