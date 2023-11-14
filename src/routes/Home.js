import React from 'react'
import Navbar from '../components/Navbar'
import HomeImage from '../components/HomeImage'
import HomeText from '../components/HomeText'

const Home = () => {
  return (
    <div className='Home'>
      <Navbar/>
      <HomeImage/>
      <HomeText/>
    </div>
  )
}

export default Home

