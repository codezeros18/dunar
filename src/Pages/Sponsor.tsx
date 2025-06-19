import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer'
import SponsorCard from '../Components/SponsorCard'
import Bg3 from '../assets/back2.webp'
import { useScrollToHash } from '../Components/useScrollToHash'
import KennyModal from '../assets/Kenny.jpg';
import LintangModal from '../assets/Lintang.jpg';
import VasselModal from '../assets/Vassel.jpg';


const sponsorData = [
  {
    image: KennyModal,
    title: "Kenny",
    description: "Kenny adalah kenny",
  },
  {
    image: LintangModal,
    title: "Lintang",
    description: "Lintang adalah lintang",
  },
  {
    image: VasselModal,
    title: "Vassel",
    description: "Vassel adalah vassel",
  },
]

const Sponsor: React.FC = () => {
  useScrollToHash()

  return (
      <div className="font-montserrat min-h-screen">
        <div
          className="relative min-h-screen w-full pb-40 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Bg3})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative z-10">
            <Navbar />
            <div className="container mx-auto px-4 py-10">
              {sponsorData.map((item, index) => (
                <SponsorCard key={index} data={item} index={index} />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    // </SmoothScroll>
  )
}

export default Sponsor