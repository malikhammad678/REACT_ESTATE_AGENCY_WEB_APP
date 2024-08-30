import React from 'react'
import './GetStarted.css'
const GetStarted = () => {
  return (
    <section className='g_wrapper'>
       <div className="g_container">
         <div className="flexColCenter inner_container">
            <span className='primaryText'>Get Started with Homyz</span>
            <span className='secondaryText'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, repudiandae.
                <br />
                Find Your Residence Soon
            </span>
            <a href="mailto:hammadahmed20004@gmail.com"><button className='button btnStart'>Get Started</button></a>
         </div>
       </div>
    </section>
  )
}

export default GetStarted
