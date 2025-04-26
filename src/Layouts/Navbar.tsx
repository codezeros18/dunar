import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import img1 from '../assets/logo.png';
import menuAnimation from '../assets/menuV2.json';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const animationRef = useRef<any>(null);

    const Navbar = [
        { nav: 'Events', link: '/proker' },
        { nav: 'About Us', link: '/about' },
    ];

    const toggleMobile = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (animationRef.current) {
            animationRef.current.setSpeed(2); // Adjust speed (1 is default, 2 is faster)
    
            if (isMobileMenuOpen) {
                animationRef.current.setDirection(-1);
            } else {
                animationRef.current.setDirection(1);
            }
    
            animationRef.current.play();
        }
    };

    return (
        <div className='py-2 font-poppins'>
            <div className="bg-white mx-4 md:mx-12 py-0 my-4 rounded-[50px] shadow-md z-50 relative">
                <div className='mx-8 md:mx-auto md:max-w-7xl'>
                    <div className='flex justify-between items-center'>
                        <Link to="/">
                            <img src={img1} className='-ml-3 md:-ml-0 w-30' alt="Logo" />
                        </Link>
                        <div className='hidden md:flex'>
                            <ul className='flex space-x-8'>
                                {Navbar.map((item, index) => (
                                    <li key={index} className='text-[16px] font-[500] text-black transition-all duration-300 hover:text-indigo-300'>
                                        <Link to={item.link}>{item.nav}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex md:hidden'>
                            <button onClick={toggleMobile} className='w-8 h-8'>
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
                
                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            exit={{ opacity: 0, y: -10 }} 
                            transition={{ duration: 0.3 }}
                            className='absolute top-full mt-2 left-0 w-full bg-white shadow-lg z-50 flex flex-col p-4 space-y-3 rounded-[50px]'
                        >
                            <ul className='space-y-4'>
                                {Navbar.map((item, index) => (
                                    <li key={index} className='text-[12px] px-10 font-semibold'>
                                        <Link to={item.link} onClick={toggleMobile}>{item.nav}</Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Navbar;