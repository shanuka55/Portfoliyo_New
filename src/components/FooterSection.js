import React from 'react'
import "./FooterSectionStyle.css"
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"

const FooterSection = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: "black", marginRight: "2rem"}} />
                    <div>
                        <p>No 517,Polonnaruwa</p>
                        <p>Aralaganvila.</p>
                    </div>
                </div>

                <div className='phone'>
                    <h4>
                        <FaPhone size={20} style={{color: "black", marginRight: "2rem"}} />
                        077-6464 869
                    </h4>  
                </div>

                <div className='email'>
                    <h4>
                        <FaMailBulk size={20} style={{color: "black", marginRight: "2rem"}} />
                        shanukalaksha5555@gmail.com
                    </h4>  
                </div>
            </div>

            <div className='right'>
                <h4>About the Company</h4>
                <p>Nothing to company</p>
                <div className='socoal'>
                    <FaFacebook size={20} style={{color: "black", marginRight: "2rem"}} />
                    <FaTwitter size={20} style={{color: "black", marginRight: "2rem"}} />
                    <FaLinkedin size={20} style={{color: "black", marginRight: "2rem"}} />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterSection