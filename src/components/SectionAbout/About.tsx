import {TbArrowMoveRight} from 'react-icons/tb'
const About = () => {
  return (
    <section className="about">
      <div className="section__container about__container">
        <div className="about__image about__image-1" id="about">
          <img src="/image/about-1.jpg" alt="about" />
        </div>
        <div className="about__content about__content-1">
          <h3 className="section__subheader">GET STARTED</h3>
          <h2 className="section__header">What level of hiker are you?</h2>
          <p>
            Whether you&lsquo;re a novice seeking scenic strolls or an experienced
            trekker craving challenging ascents, we&lsquo;ve curated a diverse range
            of trails to cater to every adventurer. Uncover your hiking
            identity, explore tailored recommendations, and embrace the great
            outdoors with a newfound understanding of your capabilities.
          </p>
          <div className="about__btn">
            <a href="#">
              Read more
              <span><TbArrowMoveRight/></span>
            </a>
          </div>
        </div>
        <div className="about__image about__image-2" id="equipment">
          <img src="/image/about-2.jpg" alt="about" />
        </div>
        <div className="about__content about__content-2">
          <h3 className="section__subheader">HIKING ESSENTIALS</h3>
          <h2 className="section__header">Picking the right hiking gear!</h2>
          <p>
            From durable footwear that conquers rugged trails to lightweight
            backpacks that carry your essentials with ease, we navigate the
            intricacies of gear selection to ensure you&lsquo;re geared up for success
            on every hike. Lace up your boots and let the journey begin with
            confidence, knowing you&lsquo;ve chosen the right gear for the trail
            ahead!
          </p>
          <div className="about__btn">
            <a href="#">
              Read more
              <span><TbArrowMoveRight/></span>
            </a>
          </div>
        </div>
        <div className="about__image about__image-3" id="blog">
          <img src="/image/about-3.jpg" alt="about" />
        </div>
        <div className="about__content about__content-3">
          <h3 className="section__subheader">WHERE YOU GO IS THE KEY</h3>
          <h2 className="section__header">Understanding your map & timing</h2>
          <p>
            Knowing when to start and anticipating the changing conditions
            ensures a safe and enjoyable journey. So, dive into the details,
            grasp the contours, and synchronize your steps with the rhythm of
            nature. It&lsquo;s not just a hike; it&lsquo;s a journey orchestrated by your
            map and timed to perfection.
          </p>
          <div className="about__btn">
            <a href="#">
              Read more
              <span><TbArrowMoveRight/></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About