// Icons Social
import {BsTwitterX} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {IoIosArrowDown} from 'react-icons/io'
const SectionContainer = () => {
  return (
    <div className="section__container header__container">
        <div className="header__content">
          <h3 className="section__subheader">A HIKING GUIDE</h3>
          <h1 className="section__header">
            Be Prepared For The Mountains And Beyond!
          </h1>
          <div className="scroll__btn">
            <a href="#about">
              Scroll down
              <span><IoIosArrowDown/></span>
            </a>
          </div>
        </div>
        <div className="header__socials">
          <span>Follow us</span>
          <a href="#"><FaInstagram/></a>
          <a href="#"><BsTwitterX/></a>
        </div>
      </div>
  )
}

export default SectionContainer