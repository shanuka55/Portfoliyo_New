import React from 'react'
import "./HomeImageStyle.css"
import IntroImg from "../Assets/1473819.jpg"

function HomeImage() {
  return (
    <div className='mask'>
      <img className='into-img' 
      src={IntroImg} alt='IntroImg'/>
      <div className='Homeimage'></div>  
    </div>
    
  )
}

export default HomeImage