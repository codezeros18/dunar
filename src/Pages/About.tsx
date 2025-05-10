import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer'
import Bg3 from '../assets/back2.webp'
import AboutUs2 from '../Components/AboutUs2'

const About: React.FC = () => {
  return (
    <div className="font-montserrat min-h-screen">
      <div className="relative h-screen md:h-[140vh] lg:h-[140vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${Bg3})` }}
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <div className="relative z-20">
          <Navbar />
          {/* <AboutUs2 /> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
