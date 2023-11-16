import React from 'react'
import "./HometextStyle.css"
import { Link } from "react-router-dom";


const HomeText = () => {
  return (
    
    <div className='Home-Text'>
      <div className='container'>
        <h1 className='home-hi'>Hey There, </h1>
        <h1 className='home-h1'>I’m Shanuka Lakshan</h1>
        <h3 className='home-h3'>Full stack Developer</h3>
        <br></br>
        <div>
          <Link to="/about" className='btn'>Get Start </Link>
        </div>
        <div className='icon'>
        </div>
      </div>    
    </div>
  )
}

export default HomeText