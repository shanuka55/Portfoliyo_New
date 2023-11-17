import React from 'react'
import Navbar from '../components/Navbar'
import FooterSection from '../components/FooterSection'
import Heroimg2 from '../components/Heroimg2'


const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works" />
      <FooterSection/>
    </div>
  )
}

export default Project