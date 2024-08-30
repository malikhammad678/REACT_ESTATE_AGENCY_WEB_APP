import React from 'react'
import './Hero.css'
import CountUp from 'react-countup';
import { HiLocationMarker } from 'react-icons/hi'
const Hero = () => {
  return (
    <section className="hero_wrapper">
      <div className="paddings hero_container">
      <div className="hero_left">
       <div className="hero_title">
        <div className="orange_circle"></div>
        <h1>Discover <br />Most Suitable <br />Property</h1>
       </div>
       <div className="flexColStart hero_des">
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ipsa?</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, tenetur.</span>
       </div>
       <div className=" search_bar">
       <HiLocationMarker color="var(--blue)" size={32} />
        <input type="text" required />
        
        <button className='button'>Search</button>
       </div>
       <div className="stats">
        <div className="stat">
          <span>
            <CountUp start= {4000} end={5000} duration={4} className='count' />
            <span className='plus'>+</span> <br />
            <span className='secondText'>Premium Products</span>
          </span>
        </div>
        <div className="stat">
          <span>
            <CountUp start= {2000} end={3000} duration={4} className='count' />
            <span className='plus'>+</span> <br />
            <span className='secondText'>Happy Clients</span>
          </span>
        </div>
        <div className="stat">
          <span>
            <CountUp end={20} duration={4}  className='count'/>
            <span className='plus'>+</span> <br />
            <span className='secondText'>Award Winning</span>
          </span>
        </div>
       </div>
      </div>
      <div className=" hero_right">
           <div className="image_container">
            <img src="./hero-image.png" alt="hero image" />
           </div>
      </div>
      </div>
    </section>
  )
}

export default Hero
