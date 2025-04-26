import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[85vh] md:min-h-[85vh] max-w-7xl mx-4 md:mx-auto text-center">
      <motion.div
        className="mb-12 md:mb-0"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="flex justify-center tracking-wide text-[62px] leading-[50px] font-extrabold text-white font-poppins my-4">
          Duta Anti Narkoba
        </h1>
        <h4 className="text-[18px] leading-[26px] md:text-[22px] md:leading-[30px] font-poppins text-white opacity-65 font-bold">
          Smart, Healthy, and Fun
        </h4>
      </motion.div>
    </div>
  );
};

export default Header;
