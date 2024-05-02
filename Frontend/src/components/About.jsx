import React from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <div>
        <section className='about' id='about'>
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>The only the thing we love is food!</p>
                    </div>
                    <p className='mid'>
                    Indulge in a culinary journey at our restaurant, where passion meets innovation. With a dedication to quality ingredients and creative flair, we craft memorable dining experiences. From cozy ambiance to impeccable service, we strive to exceed expectations, inviting you to savor moments of delight with every visit.
                    </p>
                <Link to={"/"}>
                    Explore Menu{" "} 
                    <span>
                        <HiOutlineArrowNarrowRight />
                    </span>
                </Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>

        </section>
      
    </div>
  )
}

export default About
