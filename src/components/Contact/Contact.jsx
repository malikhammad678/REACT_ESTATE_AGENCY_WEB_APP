import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'
import { MdVideoCall } from 'react-icons/md'
const Contact = () => {
  return (
    <section className='c_wrapper'>
      <div className="c_container">
        <div className="c_left">
          <span className='orangeText'>Contact us</span>
          <span className='primaryText'>Get in touch</span>
          <span className='secondaryText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, sequi? Nihil consequuntur corporis.</span>
          <div className="flexColStart contactMode">
            <div className="flexStart row">
                <div className="flexColCenter mode">
                    <div className="flexCenter">
                        <div className="flexCenter icon">
                         <MdCall size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span>Phone</span>
                            <span>+123-456-789</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Call Now</div>
                </div>
                <div className="flexColCenter mode">
                    <div className="flexCenter">
                        <div className="flexCenter icon">
                         <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span>Chat</span>
                            <span>+123-456-789</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Chat Now</div>
                </div>
            </div>
            <div className="flexStart row">
                <div className="flexColCenter mode">
                    <div className="flexCenter">
                        <div className="flexCenter icon">
                         <MdVideoCall size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span>Video Call</span>
                            <span>+123-456-789</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Video Call Now</div>
                </div>
                <div className="flexColCenter mode">
                    <div className="flexCenter">
                        <div className="flexCenter icon">
                         <HiChatBubbleBottomCenter size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span>Message</span>
                            <span>+123-456-789</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Chat Now</div>
                </div>
            </div>
          </div>
        </div>
        <div className="c_right">
            <div className="image_container">
                <img src="./contact.jpg" alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
