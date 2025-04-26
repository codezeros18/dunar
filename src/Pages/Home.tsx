import React, { useState, useEffect } from 'react'
import Navbar from '../Layouts/Navbar'
import Header from '../Components/Header'
import Events from '../Components/Events'
import Footer from '../Layouts/Footer'
import Dunar from '../Components/Dunar'
import Bg3 from '../assets/back1.jpg'

const images = [Bg3, Bg3, Bg3]

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    // <SmoothScroll>
      <div className="font-montserrat relative min-h-screen overflow-hidden">
        <div className="relative h-[250vh] w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative z-10">
            <Navbar />
            <Header />
            <Dunar />
          </div>
        </div>
        {/* <div className="relative h-auto py-20 w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-right bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="absolute inset-0 bg-black opacity-70" />
          <div className="relative z-10">
            <DivisionSlider />
          </div>
        </div> */}
        <Events />
        <Footer />
      </div>
    // </SmoothScroll>
  )
}

export default Home
