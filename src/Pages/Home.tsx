import React, { useState, useEffect } from 'react'
import Navbar from '../Layouts/Navbar'
import Header from '../Components/Header'
// import SmoothScroll from '../Components/SmoothScroll'
import Events from '../Components/Events'
import Footer from '../Layouts/Footer'
import VisiMisi from '../Components/VisiMisi'
import "@fontsource/montserrat/300.css"; // Light
import "@fontsource/montserrat/600.css"; // Semi-bold
import "@fontsource/montserrat/900.css"; // Extra-bold
import DivisionSlider from '../Components/DivisionSlider'
import DivisionSlider2 from '../Components/DivisionSlider2'


// import CustomCalendar from '../Components/CustomCalendar'

// import Bg1 from '../assets/background8.jpg'
// import Bg2 from '../assets/background9.jpeg'
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
        <div className="relative h-screen w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="absolute inset-0 bg-black opacity-30" />
          <div className="relative z-10">
            <Navbar />
            <Header />
          </div>
        </div>
        <VisiMisi />
        {/* <DivisionSlider /> */}
        <DivisionSlider2 />
        <Events />
        <Footer />
      </div>
    // </SmoothScroll>
  )
}

export default Home
