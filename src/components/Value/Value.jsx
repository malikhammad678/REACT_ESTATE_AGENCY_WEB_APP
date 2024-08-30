import React, { useState } from 'react'
import './Value.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
  } from 'react-accessible-accordion';
  import 'react-accessible-accordion/dist/fancy-example.css';
  import { MdOutlineArrowDropDown } from 'react-icons/md';
  import  data  from '../../utils/accordian'
const Value = () => {
  return (
    <section className='v_wrapper'>
      <div className="v_container">
        <div className="v_left">
            <div className="image_container">
                <img src="./value.png" alt="" />
            </div>
        </div>
        <div className="v_right">
            <span className='orangeText'>Our Value</span>
            <span className='primaryText'>Value for you</span>
            <span className='secondaryText'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, officia!
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, error!
            </span>

            <Accordion
            className='accordian'
            allowMultipleExpanded = {false}
            preExpanded={[0]}

            >
               {
                data.map((acc,index) => {
                    const [className,setClassName] = useState(null);
                    return (
                        <AccordionItem
                        className={`accordion_item ${className}`}
                        key={index}
                        uuid={index}
                        >
                            <AccordionItemHeading>
                                <AccordionItemButton className='accordion_btn'>
                                    <AccordionItemState>
                                    {({expanded}) => expanded ? setClassName("expanded") : setClassName("collapse")}
                                    </AccordionItemState>
                                    <div className="icon">{acc.icon}</div>
                                    <span className="primaryText">
                                        {acc.heading}
                                    </span>
                                    <div className="icon">
                                        <MdOutlineArrowDropDown size={20} className='arrow'/>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                          <AccordionItemPanel>
                            <span className="secondaryText">{acc.detail}</span>
                          </AccordionItemPanel>
                        </AccordionItem>
                    )
                })
               }

            </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Value
