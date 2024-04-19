import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="logo footer__logo">
            <a href="#"><Image className='footer__logo' src='/logo/logo-w-w.svg'  alt="In" width={84} height={29}/></a>
          </div>
          <p>
            Get out there & discover your next slope, mountains & destination!
          </p>
        </div>
        <div className="footer__col">
          <h4>More on The Blog</h4>
          <ul className="footer__links">
            <li><a href="#">About IN</a></li>
            <li><a href="#">Contributors & Writers</a></li>
            <li><a href="#">Write For Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>More on IN</h4>
          <ul className="footer__links">
            <li><a href="#">The Team</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2024 IN Travel. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer