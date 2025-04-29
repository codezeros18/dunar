import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const HeaderEvent: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[25vh] max-w-7xl mx-4 md:mx-auto text-center -mb-2 md:-mb-24">
      <motion.div
        className="mb-12 md:mb-0"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="flex justify-center tracking-wide text-[42px] md:text-[52px] leading-[50px] font-extrabold text-white font-poppins my-4">
          Events
        </h1>
      </motion.div>
    </div>
  );
};

export default HeaderEvent;
