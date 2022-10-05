import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    //  this is for multiple instances
    <>
      <Header />
      <Navbar />
      <Carousel/>
    </>

  )
}

export default Home
