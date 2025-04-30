import React, { useState, useEffect } from 'react'
import Navbar from '../Layouts/Navbar'
// import HeaderAbtUs from '../Components/HeaderAbtUs'
import Events from '../Components/Events'
import Footer from '../Layouts/Footer'
import Dunar from '../Components/Dunar'
import Bg3 from '../assets/back1.jpg'
import AboutUs from '../Components/AboutUs'

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
        <div className="relative h-[250vh] md:h-[220vh] w-full">
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
            {/* <HeaderAbtUs /> */}
            <AboutUs />
          </div>
        </div>
        <Footer />
      </div>

    // </SmoothScroll>
  )
}

export default Home
