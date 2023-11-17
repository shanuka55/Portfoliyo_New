import React from 'react'
import Navbar from '../components/Navbar'
import HomeImage from '../components/HomeImage'
import HomeText from '../components/HomeText'
import FooterSection from '../components/FooterSection'

const Home = () => {
  return (
    <div className='Home'>
      <Navbar/>
      <HomeImage/>
      <HomeText/>
      <FooterSection/> 
    </div>
  )
}

export default Home

