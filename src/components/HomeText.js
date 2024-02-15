import React from 'react'
import "./HometextStyle.css"
import { Link } from "react-router-dom";
import github from '../Assets/github.png'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'
import linkedin from '../Assets/linkedin.png'

const HomeText = () => { 
  return (
    
    <div className='Home-Text'>
      <div className='container'>
        <h1 className='home-hi'>Hey There,  </h1>
        <h1 className='home-h1'>I’m Shanuka Lakshan</h1>
        <h3 className='home-h3'>Full stack Developer</h3>
        <br></br>
        <div>
          <Link to="/about" className='btn'>Get Start </Link>
        </div>
        <div className='icon'>
            <img  src={github} alt=''/>
            <img src={facebook} alt=''/>
            <img src={instagram} alt=''/>
            <img src={linkedin} alt=''/>
        </div>
      </div>    
    </div>
  )
}

export default HomeText