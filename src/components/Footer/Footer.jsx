import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className='f_wrapper'>
      <div className="f_container">
         <div className="flexColStart left">
            <img src="./logo2.png" width={120} alt="" />
            <span className='secondaryText'>
                Lorem ipsum dolor sit amet consectetur.
                <br />
                Lorem ipsum dolor sit amet consectetur.
            </span>
         </div>
         <div className="flexColStart right">
            <span className='primaryText'>Information</span>
            <span>Lorem ipsum dolor sit amet.</span>
            <div className="flexCenter f_menu">
                <span>Services</span>
                <span>Property</span>
                <span>Contact</span>
                <span>About</span>
            </div>
         </div>
      </div>
    </section>
  )
}

export default Footer
