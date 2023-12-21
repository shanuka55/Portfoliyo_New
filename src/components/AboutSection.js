import React from 'react'
import "./AboutSectionStyle.css"
import img from "../Assets/p1.png"

const AboutSection = () => {
  return (
      
    <div>

      <a href="#" class="photo">

        <img className='About-img' src={img} alt='About-img'/>
    

        <div class="glow-wrap">
            <i class="glow"></i>
        </div>

        <div className='about-me' >
          <p className='about-p'>
            I live in Polonnaruwa at Sri lanka.<br/>
            I’m Currently study at Institute of Java and Software Engineering (IJSE).<br/>
            I have skill about web application design and software devolopment in java.<br/>
            And I Interest in Graphic Designing and Photography.
          </p>
          <br/>
          <p className='about-details'>
          <b>Name</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;:    H.G.Shanuka Lakshan Weerasooriya
          <br/>
          <b>Date of Birth</b> &nbsp;&nbsp;  :    2000.05.05
          <br/>
          <b>Nationalitty</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:   Sri Lanka
          </p>
        </div>
    
      </a>

    </div>
      

  )
}

export default AboutSection