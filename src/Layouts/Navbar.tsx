import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import img1 from '../assets/logo.png';
import menuAnimation from '../assets/menuV2.json';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const animationRef = useRef<any>(null);

  const Navbar = [
    { nav: 'Events', link: '/proker' },
    { nav: 'About Us', link: '/about' },
  ];

  const toggleMobile = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (animationRef.current) {
      animationRef.current.setSpeed(2);
      animationRef.current.setDirection(isMobileMenuOpen ? -1 : 1);
      animationRef.current.play();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-10 z-[999] bg-transparent font-poppins transition-all duration-300">
      {/* Top navbar */}
      <div
        className={`mx-4 md:mx-12 mb-4 rounded-[50px] shadow-md transition-all duration-300 ${
          isScrolled ? 'bg-white/60 backdrop-blur-md' : 'bg-white'
        }`}
      >
        <div className="px-8 lg:px-2 md:max-w-7xl md:mx-auto">
          <div className="flex justify-between items-center py-1">
            <Link to="/">
              <img src={img1} className="-ml-3 md:-ml-0 w-30" alt="Logo" />
            </Link>

            <div className="hidden lg:flex">
              <ul className="flex space-x-8">
                {Navbar.map((item, index) => (
                  <li
                    key={index}
                    className="text-[16px] font-[500] text-black transition-all duration-300 hover:text-indigo-300"
                  >
                    <Link to={item.link}>{item.nav}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex lg:hidden">
              <button onClick={toggleMobile} className="w-8 h-8">
                <Lottie
                  animationData={menuAnimation}
                  loop={false}
                  autoplay={false}
                  lottieRef={animationRef}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile dropdown (moved outside of scroll-reactive container) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mx-4 md:mx-12 rounded-[50px] shadow-md bg-white p-4 space-y-3 z-[999] relative"
          >
            <ul className="space-y-4">
              {Navbar.map((item, index) => (
                <li key={index} className="text-[12px] px-10 font-semibold text-black transition-all duration-300 hover:text-indigo-300">
                  <Link to={item.link} onClick={toggleMobile}>
                    {item.nav}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
