import React, { useEffect } from 'react';
import './Residence.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';

const Residence = () => {
  useEffect(() => {
    console.log('Residence component mounted');
  }, []);

  return (
    <section className="r_wrapper">
      <div className="r_container">
        <div className="r_head">
          <span className='orangeText'>Best Choices</span><br />
          <span className='primaryText'>Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {
            data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="r_card">
                  <img src={card.image} alt="" />
                  <span className='secondaryText r_price'>
                    <span style={{ color: 'orange' }}>$</span><span>{card.price}</span>
                  </span>
                  <span className='primaryText card_name'>{card.name}</span>
                  <span className='secondaryText card_detail'>{card.detail}</span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  );
};

export default Residence;

const SliderButtons = () => {
  const swiper = useSwiper();
  
  return (
    <div className="r_button">
      <button className="prev" onClick={() => swiper.slidePrev()}>&lt;</button>
      <button className="next" onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
