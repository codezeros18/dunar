import React, { useState, useEffect } from 'react'
import Navbar from '../Layouts/Navbar'
import Events from '../Components/EventSlider'
import Footer from '../Layouts/Footer'
import Bg3 from '../assets/back2.jpg'
import { useScrollToHash } from '../Components/useScrollToHash'

const images = [Bg3, Bg3, Bg3]


const Home: React.FC = () => {
  useScrollToHash()

  return (
    // <SmoothScroll>
      <div className="font-montserrat min-h-screen">
        <div className="relative h-[220vh] md:h-[270vh] w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative z-10">
            <Navbar />
            <Events />
          </div>
        </div>

        <Footer />
      </div>
    // </SmoothScroll>
  )
}

export default Home