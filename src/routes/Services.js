import React from 'react'
import Navbar from '../components/Navbar'
import FooterSection from '../components/FooterSection'
import Heroimg2 from '../components/Heroimg2'
import { ServiceSection } from '../components/ServiceSection'

const Services = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="SERVICES." text="This is my Services"/>
      <ServiceSection/> 
      <FooterSection/>
    </div>
  )
}

export default Services