import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer'
import Bg3 from '../assets/back2.webp'
import AboutUs2 from '../Components/AboutUs2'

const images = [Bg3, Bg3, Bg3]

const About: React.FC = () => {

  return (
    // <SmoothScroll>
      <div className="font-montserrat min-h-screen">
        <div className="relative h-screen md:h-[140vh] lg:h-[140vh] w-full">
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
            <AboutUs2 />
          </div>
        </div>
        <Footer />
      </div>
    // </SmoothScroll>
  )
}

export default About
