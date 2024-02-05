import React from 'react'
import "./ServiceSectionStyle.css"
import { FaCode } from "react-icons/fa";
import { colors } from '@mui/material';

export const ServiceSection = () => {
  return (
    <div>
        <div className='serviceContainer'>
            <div className='box'>
                <div className='content'>
                    <div className='Serviceicon'><FaCode size={25} /></div>
                    <div className='text'>
                        <h3>Designing</h3>
                        <p>Lorem</p>
                        <a href=''>Read More</a>
                    </div>
                </div>
            </div>
            <div className='box' >
                <div className='content'>
                    <div className='Serviceicon'></div>
                    <div className='text'>
                        <h3>Development</h3>
                        <p>Lorem</p>
                        <a href=''>Read More</a>
                    </div>
                </div>
            </div>
            <div className='box' >
                <div className='content'>
                    <div className='Serviceicon'></div>
                    <div className='text'>
                        <h3>SEO</h3>
                        <p>Lorem</p>
                        <a href=''>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
