import React from 'react'
import "./AboutSectionStyle.css"
import img from "../Assets/b2.jpg"

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
          Hi, my name is Shanuka Lakshan <br/>
            I live in Polonnaruwa at Sri lanka.<br/>
            I’m Currently study at Institute of Java and Software Engineering (IJSE).<br/>
            I have skill about web application design and software devolopment in java.<br/>
            And I Interest in Graphic Designing and Photography.
          </p>
          <br/>
          <p className='about-details'>
          
          <b className='bolt'>Date of Birth</b> &nbsp;&nbsp;  :    2000.05.05
          <br/>
          <b className='bolt'>Nationalitty</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:   Sri Lanka
          </p>
        </div>
        <div className='my-cv'>

        </div>
    
      </a>

    </div>
      

  )
}

export default AboutSection