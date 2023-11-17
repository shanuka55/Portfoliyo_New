import React from 'react'
import AboutSection from '../components/AboutSection'
import Navbar from '../components/Navbar'
import FooterSection from '../components/FooterSection'
import Heroimg2 from '../components/Heroimg2'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT." text="Im a friendly Full-Stack Developer "/>
      <AboutSection/>
      <FooterSection/>
    </div>
  )
}

export default About